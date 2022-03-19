import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { isLoading, userDetails } = UseAuth()
    const location = useLocation();
    console.log(userDetails, isLoading, 'userDetails');

    if (isLoading) {
        return <span className='flex justify-center'><CircularProgress color="inherit" /></span>
    }
    if (userDetails.email && userDetails.role === 'admin') {
        return children;
    }
    if (userDetails.email && userDetails.role === 'vendor') {
        return children;
    }

    if (userDetails.role === '') {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    if (userDetails.role === 'user') {
        return <Navigate to="/" state={{ from: location }} />;
    }

};

export default AdminRoute;