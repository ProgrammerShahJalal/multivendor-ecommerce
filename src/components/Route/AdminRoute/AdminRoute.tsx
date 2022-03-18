import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { userDetails, isLoading } = UseAuth()
    const location = useLocation();
<<<<<<< HEAD
    if (isLoading) {
        return <CircularProgress color="inherit" />
    }
=======

>>>>>>> 0f441f83b487fa040c82a0c7cefff5d403db3473

    if (isLoading) {
        return <span className='flex justify-center'><CircularProgress color="inherit" /></span>
    }
    if (userDetails.email && userDetails.role === 'admin') {
        return children;
    } else if (userDetails.email && userDetails.role === 'vendor') {
        return children;
    }

    if (userDetails.role === '' || 'user') {
        return <Navigate to="/login" state={{ from: location }} />;
    }



};

export default AdminRoute;