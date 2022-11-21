
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, OptionsIcon, PlusIcon } from '../../../common/components/icons';

export const AddData = () => {
    return (
        <>
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#514E4E] flex font-inter items-center gap-1 mb-3">
                    <HomeIcon width='12px' height='13px' />
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#A9A8A8]">User</span>
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#A9A8A8]">Access</span>
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">Add Data</span>
                </div>
                <div className='flex-1'>
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">Add Data</span>
                            <div className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md">
                                <PlusIcon />
                                <span>Add Data</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className="py-[8px] px-[24px] flex-1 flex gap-2 flex-col justify-between">
                                <span className='text-[22px] font-semibold'>Role</span>
                                <input type="text" className="bg-transparent outline-none border-[1px] px-3 py-2 text-[#A4A6A8] font-inter font-normal placeholder:text-[#CACBCD] rounded-md" placeholder="Input role" />
                                <div className='flex gap-2'>
                                    <div className="text-white items-center px-[14px] py-[8px] w-[150px] text-center bg-[#229BD8] rounded-sm">
                                        <span>SAVE</span>
                                    </div>
                                    <div className="text-white items-center px-[14px] py-[8px] w-[150px] text-center bg-[#B3B5B7] rounded-sm">
                                        <span>CANCEL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
