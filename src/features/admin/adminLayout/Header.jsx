import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from './adminLayoutSlice';
import { useNavigate } from 'react-router-dom';
import { HiBell, HiMenu, HiSearch, HiUser } from "react-icons/hi";
import { useGetAuthenticatedUserQuery } from '../../../app/services/authService';
import { Loader } from '../../../common/components';

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="h-[10%] border-b-[1px] border-[#514E4E] flex items-center justify-between px-[2vw]">
        <div className="flex gap-[0.8vw] items-center">
          <HiMenu onClick={() => dispatch(toggle())} className='cursor-pointer text-[24px] text-white' />
          <div className="flex items-center border-[1px] border-[#514E4E] h-[5vh] px-[0.8vw] gap-[0.8vw] rounded-[0.8vw]">
            <HiSearch className='text-[20px] text-white' />
            <input type="text" className="bg-transparent outline-none w-[12vw] h-[4vh] text-[1vw] text-[#fff] font-inter font-normal placeholder:text-[#514E4E]" placeholder="Search..." />
          </div>
        </div>
        <div className="flex gap-[2vw]">
          <div className="relative">
            <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-red-500 absolute top-0 right-0"></span>
            <HiBell className='cursor-pointer text-[24px] text-white' />
          </div>
          {auth ? <span className='text-white'>Login</span> : <HiUser onClick={() => navigate('')} className='cursor-pointer text-[24px] text-white' />}
        </div>
      </div>
    </>
  )
}