import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user } = UseAuth()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if (user.email) {
            setIsLoading(true)
            fetch(`https://guarded-ocean-73313.herokuapp.com/users/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("userDetails", JSON.stringify(data))
                }).finally(() => setIsLoading(false))
        }
    }, [user])
    const location = useLocation();
    const userDetails = localStorage.getItem("userDetails") ? JSON.parse(localStorage.getItem('userDetails') || '{}') : { role: "", email: "" }

    if (isLoading) {
        return <span className='flex justify-center'><CircularProgress color="inherit" /></span>
    } else if (userDetails.role === '') {
        return <Navigate to="/login" state={{ from: location }} />;
    } else if (userDetails.email && userDetails.role === 'vendor') {
        return children;
    } if (userDetails.role === 'user') {
        return <Navigate to="/" state={{ from: location }} />;
    }


};

export default AdminRoute;