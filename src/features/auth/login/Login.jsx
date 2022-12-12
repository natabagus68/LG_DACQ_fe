import React, { useState } from 'react';
import lg_black from '../../../assets/lg_black.png';
import { HiOutlineMail, HiOutlineKey, HiEyeOff, HiEye } from "react-icons/hi";
import { useLoginMutation } from "../../../app/services/authService";

export const Login = () => {
    const [authenticate, { error: authenticateError, isLoading: authenticateLoading }] = useLoginMutation();
    const [showPassword, setShowPassword] = useState(false);

    const onLogin = (e) => {
        e.preventDefault();

        authenticate({
            email: e.target.email.value,
            password: e.target.password.value
        });
    };

    return (
        <>
            <div className="w-[431px] h-[453px] border rounded-xl shadow-md flex items-center justify-center">
                <form className='flex flex-col gap-4 font-semibold text-[#5C5E61]' onSubmit={ onLogin }>
                    <img src={ lg_black } alt="LG" className='w-[154px]' />
                    <span className='text-[32px] text-[#617E8C] font-bold leading-10'>Welcome back.</span>
                    <span className=''>Log in to your account</span>
                    <div className='border rounded-lg h-12 w-[335px] px-3 flex items-center gap-2'>
                        <HiOutlineMail className='text-2xl' />
                        <input type='text' name='email' className='w-full h-full outline-none text-black placeholder:text-[#acadb0]' placeholder='input your email' />
                    </div>
                    <div className='border rounded-lg h-12 w-[335px] px-3 flex items-center gap-2'>
                        <HiOutlineKey className='text-2xl' />
                        <input type={ showPassword ? 'text' : 'password' } name='password' className='w-full h-full outline-none text-black placeholder:text-[#acadb0]' placeholder='input password' />
                        { showPassword ?
                            <HiEye onClick={ () => setShowPassword(i => !i) } className='text-2xl cursor-pointer' /> :
                            <HiEyeOff onClick={ () => setShowPassword(i => !i) } className='text-2xl cursor-pointer' />
                        }
                    </div>
                    { authenticateError && <span className="text-red-600">{ authenticateError }</span> }
                    <button type='submit' className='h-12 bg-black rounded-lg text-white font-semibold text-base disabled:bg-gray-600' disabled={ authenticateLoading }>Login</button>
                </form>
            </div>
        </>
    );
};
