
import React from "react";
import { HomeIcon, DownloadIcon, FilterIcon, CalendarIcon, SearchIcon, OptionsIcon } from '../../../common/components/icons';

export const Log = () => {
    return(
        <>
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#514E4E] flex font-inter items-center gap-1 mb-3">
                    <HomeIcon width='12px' height='13px' />
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">Log</span>
                </div>
                <div className='flex-1'>
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">Log Alert Servo Motor</span>
                            <div className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md">
                                <DownloadIcon />
                                <span>Download</span>
                            </div>
                        </div>
                        <div className="py-[18px] px-[24px] flex justify-between items-center">
                            <div className="flex gap-6">
                                <div className="flex gap-1 text-[#514E4E] items-center p-[10px] h-[40px] rounded-[5px] border-[1px] border-[#A9A8A8]">
                                    <FilterIcon fill='#A9A8A8' width="16" height="16" />
                                    <span className="text-[15.44px]">Filter</span>
                                </div>
                                <div className="flex gap-1 text-[#514E4E] items-center p-[10px] h-[40px] rounded-[5px] border-[1px] border-[#A9A8A8]">
                                    <CalendarIcon width="16" height="16" />
                                    <span className="text-[12px]">Time/Year</span>
                                </div>
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
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                DEVICE
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                LEVEL
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                CATEGORY
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                TRIGERRED
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                PARAMETER
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                ALERT LOG
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SERVO 1
                                            </td>
                                            <td class="text-sm text-[#2CC024] font-light px-6 py-4 whitespace-nowrap">
                                                Low
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Aug 20, 2022 03:00
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                RPM
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload RPM, parameter max 1000, current 1100
                                            </td>
                                        </tr>
                                        <tr class="bg-[#F0F1F3] border-b">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SERVO 1
                                            </td>
                                            <td class="text-sm text-[#2CC024] font-light px-6 py-4 whitespace-nowrap">
                                                Low
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Aug 20, 2022 03:00
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                RPM
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload RPM, parameter max 1000, current 1100
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SERVO 1
                                            </td>
                                            <td class="text-sm text-[#2CC024] font-light px-6 py-4 whitespace-nowrap">
                                                Low
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Aug 20, 2022 03:00
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                RPM
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload RPM, parameter max 1000, current 1100
                                            </td>
                                        </tr>
                                        <tr class="bg-[#F0F1F3]  border-b">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SERVO 1
                                            </td>
                                            <td class="text-sm text-[#2CC024] font-light px-6 py-4 whitespace-nowrap">
                                                Low
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Aug 20, 2022 03:00
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                RPM
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload RPM, parameter max 1000, current 1100
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SERVO 1
                                            </td>
                                            <td class="text-sm text-[#2CC024] font-light px-6 py-4 whitespace-nowrap">
                                                Low
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Aug 20, 2022 03:00
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                RPM
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Overload RPM, parameter max 1000, current 1100
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
}