
import React from 'react';
import { Outlet } from 'react-router-dom';
import auth from '../../../assets/auth.png'

export const AuthLayout = () => {
    return (
        <>
            <div className={`bg-[#FFFFFF] w-screen h-screen flex`}>
                <div className='bg-[#1E1E1E] flex-1 flex items-center justify-center'>
                    <img src={auth} alt='Auth' />
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};
