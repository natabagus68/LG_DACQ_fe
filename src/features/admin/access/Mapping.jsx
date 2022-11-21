
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, OptionsIcon, PlusIcon } from '../../../common/components/icons';

export const Mapping = () => {
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
                    <span className="font-semibold text-sm text-[#514E4E]">Mapping Menu</span>
                </div>
                <div className='flex-1'>
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">Mapping Menu</span>
                            <div className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md">
                                <PlusIcon />
                                <span>Add Data</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className="pb-[18px] flex-1 flex flex-col justify-between">
                                <div className="flex">
                                    <table class="flex-1">
                                        <thead class="border-b">
                                            <tr className='flex'>
                                                <th scope="col" class="text-sm flex font-medium border-r text-gray-900 px-6 py-4 text-left">
                                                    <input type="checkbox" className="w-4 h-4" />
                                                </th>
                                                <th scope="col" class="text-sm font-semibold text-gray-900 px-6 py-4 text-left">
                                                    DATE
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b flex">
                                                <td class="px-6 py-4 border-r whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4" />
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    #Dashboard
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b flex">
                                                <td class="px-6 py-4 border-r whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4" />
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    #Production
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b flex">
                                                <td class="px-6 py-4 border-r whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4" />
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    #Assembly Line
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b flex">
                                                <td class="px-6 py-4 border-r whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4" />
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    #Master Data
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b flex">
                                                <td class="px-6 py-4 border-r whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4" />
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    #Report
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b flex">
                                                <td class="px-6 py-4 border-r whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <input type="checkbox" className="w-4 h-4" />
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    #User
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
