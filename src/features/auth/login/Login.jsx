import React, { useEffect, useState } from 'react';
import lg_black from '../../../assets/lg_black.png'
import { HiOutlineMail, HiOutlineKey, HiEyeOff } from "react-icons/hi";
import { useGetAuthenticatedUserQuery, useLoginMutation } from "../../../app/services/authService";
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../../common/components';

export const Login = () => {
    const navigate = useNavigate();
    const [authenticate, { error: authenticateError, isLoading: authenticateLoading }] = useLoginMutation();
    const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();

    const onLogin = (e) => {
        e.preventDefault();

        authenticate({
            email: e.target.email.value,
            password: e.target.password.value
        })
    }

    return (
        <>
            <div className="w-[431px] h-[453px] border rounded-xl shadow-md flex items-center justify-center">
                <form className='flex flex-col gap-4 font-semibold text-[#5C5E61]' onSubmit={onLogin}>
                    <img src={lg_black} alt="LG" className='w-[154px]'/>
                    <span className='text-[32px] text-[#617E8C] font-bold leading-10'>Welcome back.</span>
                    <span className=''>Log in to your account</span>
                    <div className='border rounded-lg h-12 w-[335px] px-3 flex items-center gap-2'>
                        <HiOutlineMail className='text-2xl' />
                        <input type='text' name='email' className='w-full h-full outline-none text-black placeholder:text-[#acadb0]' placeholder='input your email' />
                    </div>
                    <div className='border rounded-lg h-12 w-[335px] px-3 flex items-center gap-2'>
                        <HiOutlineKey className='text-2xl' />
                        <input type='password' name='password' className='w-full h-full outline-none text-black placeholder:text-[#acadb0]' placeholder='input password' />
                        <HiEyeOff className='text-2xl' />
                    </div>
                    <button type='submit' className='h-12 bg-black rounded-lg text-white font-semibold text-base'>Login</button>
                </form>
            </div>
        </>
    );
};
