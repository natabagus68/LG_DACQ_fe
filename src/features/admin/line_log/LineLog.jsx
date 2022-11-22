import React from 'react';
import { HomeIcon, PlusIcon, DownloadIcon, EyeIcon, EditIcon, SearchIcon, TrashIcon } from '../../../common/components/icons';
import { Switch } from 'tailgrids-react';
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowCircleDown } from 'react-icons/hi'

export const LineLog = () => {
    return(
        <>
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#A9A8A8] flex items-center justify-between mb-3">
                    <div className='flex items-center gap-1'>
                        <HomeIcon width='12px' height='13px' />
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">Dashboard</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">Line 1</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">ASIS</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm text-[#514E4E]">Log</span>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">Log</span>
                            <NavLink to={ '' } className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md">
                                <HiOutlineArrowCircleDown />
                                <span>Download</span>
                            </NavLink>
                        </div>
                        <div className="py-[18px] px-[24px] flex justify-between items-center">
                            <div className="flex gap-2">
                                <span>Show</span>
                                <input type='number' className='w-[62px] pl-2 outline-none border-[1px]' />
                                <span>Entries</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className="flex items-center shadow-md h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                                    Search for Models & Serial number
                                </div>
                                <div className="flex items-center border-[1px] border-[#A9A8A8] h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                                    <SearchIcon width="14" height="14" fill="#514E4E" />
                                    <input type="text" className="bg-transparent outline-none w-[150px] text-[#A4A6A8] font-inter font-normal placeholder:text-[#CACBCD]" placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                        <div className="px-[24px] pb-[18px] flex-1 flex flex-col justify-between">
                            <div className="flex-1 flex">
                                <table class="flex-1">
                                    <thead class="bg-[#D0D3D9] border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                MODEL
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                SERIAL NUMBER
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                JUDGEMENT
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                CAPTURE IMAGE
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                TIMESTAMP
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                M-A01
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className='bg-[#FAC5C1] px-4 py-2 rounded-full text-[#F04438] text-xs '>NO</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                9/28/2022 2:23:15 PM
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                M-A01
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className='bg-[#FAC5C1] px-4 py-2 rounded-full text-[#F04438] text-xs '>NO</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                9/28/2022 2:23:15 PM
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                M-A01
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className='bg-[#FAC5C1] px-4 py-2 rounded-full text-[#F04438] text-xs '>NO</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                9/28/2022 2:23:15 PM
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                M-A01
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className='bg-[#FAC5C1] px-4 py-2 rounded-full text-[#F04438] text-xs '>NO</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                9/28/2022 2:23:15 PM
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                M-A01
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className='bg-[#FAC5C1] px-4 py-2 rounded-full text-[#F04438] text-xs '>NO</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                9/28/2022 2:23:15 PM
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                M-A01
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <span className='bg-[#B6E9D1] px-4 py-2 rounded-full text-[#12B76A] text-xs '>OK</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                9/28/2022 2:23:15 PM
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-between items-center pt-4">
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
