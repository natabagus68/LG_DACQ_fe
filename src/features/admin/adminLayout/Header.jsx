import React from 'react';
import { BurgerIcon, SearchIcon, BellIcon, UserIcon } from '../../../common/components/icons';

export const Header = () => {
    return(
      <>
        <div className="h-[10%] border-b-[1px] border-[#514E4E] flex items-center justify-between px-[2vw]">
          <div className="flex gap-[0.8vw] items-center">
            <BurgerIcon />
            <div className="flex items-center border-[1px] border-[#514E4E] h-[5vh] px-[0.8vw] gap-[0.8vw] rounded-[0.8vw]">
              <SearchIcon />
              <input type="text" className="bg-transparent outline-none w-[12vw] h-[4vh] text-[1vw] text-[#A4A6A8] font-inter font-normal placeholder:text-[#514E4E]" placeholder="Search..." />
            </div>
          </div>
          <div className="flex gap-[2vw]">
            <div className="relative">
              <span className="w-[0.6vw] h-[0.6vw] rounded-full bg-red-500 absolute top-0 right-0"></span>
              <BellIcon fill='white' />
            </div>
            <UserIcon fill='white' />
          </div>
        </div>
      </>
    )
}