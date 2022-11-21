import React from 'react';
import { HomeIcon, PlusIcon, DownloadIcon, EyeIcon, EditIcon, SearchIcon, TrashIcon, CaretIcon } from '../../../common/components/icons';
import {Switch, Checkbox} from 'tailgrids-react';

export const Access = () => {
    return(
        <>
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#514E4E] flex font-inter items-center gap-1 mb-3">
                    <HomeIcon width='12px' height='13px' />
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#A9A8A8]">User</span>
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">Access</span>
                </div>
                <div className='flex-1'>
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">Access</span>
                            <div className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md">
                                <PlusIcon />
                                <span>Add Data</span>
                            </div>
                        </div>
                        <div className="py-[18px] px-[24px] flex justify-between items-center">
                            <div className="flex gap-2">
                                <span>Show</span>
                                <input type='number' className='w-[62px] pl-2 outline-none border-[1px] ' />
                                <span>Entries</span>
                            </div>
                            <div className="flex items-center border-[1px] border-[#A9A8A8] h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                                <SearchIcon width="14" height="14" fill="#514E4E" />
                                <input type="text" className="bg-transparent outline-none w-[150px] text-[#A4A6A8] font-inter font-normal placeholder:text-[#CACBCD]" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="px-[24px] pb-[18px] flex-1 flex flex-col justify-between">
                            <div className="h-[300px] flex">
                                <table class="flex-1">
                                    <thead class="bg-[#D0D3D9] border-b">
                                        <tr className='flex justify-between'>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                NAME
                                            </th>
                                            <th scope="col" class="text-sm font-medium w-[120px] text-gray-900 py-4 flex">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b flex justify-between items-center">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Super Admin
                                            </td>
                                            <td class="text-sm text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                                                <div className='flex gap-2 items-center bg-[#667085] px-3 py-2 w-fit text-white font-bold'>
                                                    <samp>Option</samp>
                                                    <CaretIcon />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b flex justify-between items-center">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Admin
                                            </td>
                                            <td class="text-sm text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                                                <div className='flex gap-2 items-center bg-[#667085] px-3 py-2 w-fit text-white font-bold'>
                                                    <samp>Option</samp>
                                                    <CaretIcon />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b flex justify-between items-center">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Management
                                            </td>
                                            <td class="text-sm text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                                                <div className='flex gap-2 items-center bg-[#667085] px-3 py-2 w-fit text-white font-bold'>
                                                    <samp>Option</samp>
                                                    <CaretIcon />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b flex justify-between items-center">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Admin
                                            </td>
                                            <td class="text-sm text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                                                <div className='flex gap-2 items-center bg-[#667085] px-3 py-2 w-fit text-white font-bold'>
                                                    <samp>Option</samp>
                                                    <CaretIcon />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b flex justify-between items-center">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Management
                                            </td>
                                            <td class="text-sm text-gray-900  font-light px-6 py-4 whitespace-nowrap">
                                                <div className='flex gap-2 items-center bg-[#667085] px-3 py-2 w-fit text-white font-bold'>
                                                    <samp>Option</samp>
                                                    <CaretIcon />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[#646566] text-base">Showing 1 to 10 of 57 entries</span>
                                <div className="flex">
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-l-[5px] flex items-center">Previous</div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center bg-[#617E8C] text-white">1</div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">2</div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">3</div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">4</div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">...</div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">8</div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-r-[5px] flex items-center">Next</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
