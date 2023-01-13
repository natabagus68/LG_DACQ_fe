import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';
import { Header } from './Header';
import { useGetAuthenticatedUserQuery } from '../../../app/services/authService';
import { Loader } from '../../../common/components';

export const AdminLayout = () => {
    const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
    if (isLoading) return <Loader />;
    if (isError || !auth?.data) return <Navigate to={ `login` } />;
    return (
        <div className="w-full bg-[#1B1A1A] flex">
            <SideBar />
            <div className="flex flex-1 flex-col">
                <Header />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
