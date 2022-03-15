import React from 'react';
import { Navigate, useLocation } from 'react-router';
import UseAuth from '../../../hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { userDetails, isLoading } = UseAuth()
    const location = useLocation();
    if (isLoading) {
        return <span className="visually-hidden">Loading...</span>

    }

    if (userDetails.email && userDetails.role === 'admin') {
        return children;
    } else if (userDetails.email && userDetails.role === 'vendor') {
        return children;
    }
    return (<Navigate to="/login" state={{ from: location }} />);
};

export default AdminRoute;