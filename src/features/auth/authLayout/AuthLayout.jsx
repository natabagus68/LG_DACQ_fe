
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetAuthenticatedUserQuery } from '../../../app/services/authService';
import bgLogin from '../../../assets/bg-login.png';
import { Loader } from '../../../common/components/Loader';

export const AuthLayout = () => {
    const { data: auth, isLoading } = useGetAuthenticatedUserQuery();
    if (isLoading) return <Loader />;
    if (auth?.data) return <Navigate to="dashboard" replace={ true } />;
    return (
        <>
            <div className={`bg-[#FFFFFF] w-screen h-screen flex`}>
                <div className='bg-[#1E1E1E] flex-1 flex items-center justify-center'>
                    <img src={ bgLogin } alt='Auth' />
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};
