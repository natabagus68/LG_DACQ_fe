import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from './SideBar';
import { Header } from './Header';

export const AdminLayout = () => {
    return (
        <div className="w-full bg-[#1B1A1A] flex">
            <SideBar />
            <div className='flex flex-1 flex-col'>
                <Header />
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
