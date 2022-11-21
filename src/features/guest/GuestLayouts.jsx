import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '../../common/components';
import { useGetAuthenticatedUserQuery } from '../auth/authApiSlice';

export const GuestLayouts = () => {
    const { data: auth, isLoading } = useGetAuthenticatedUserQuery();
    if (isLoading) return <Loader />;
    if (auth.data) return <Navigate to="dashboard" replace={ true } />;
    return (
        <>
            <Outlet />
        </>
    );
};
