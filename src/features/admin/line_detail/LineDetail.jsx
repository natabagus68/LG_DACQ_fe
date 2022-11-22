
import React, { useEffect } from 'react';
import { HomeIcon } from '../../../common/components/icons';
import { Card } from '../../../common/components/Card';
import { Switch } from 'tailgrids-react';
import chart2 from '../../../assets/chart2.png';
import { HiOutlineDocumentAdd, HiOutlinePlusSm, HiOutlineChevronRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom';

export const LineDetail = () => {
    return (
        <>
            <div className='relative h-full p-[2%] flex font-inter flex-col gap-2 bg-white'>
                <div className="text-[#A9A8A8] flex items-center justify-between mb-3">
                    <div className='flex items-center gap-1'>
                        <HomeIcon width='12px' height='13px' />
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">Dashboard</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">Line 1</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm text-[#514E4E]">ASIS</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Card>
                        <div className='flex flex-col flex-1 gap-1'>
                            <div className="flex items-center justify-between">
                                <span className='font-bold text-lg'>ASIS</span>
                                
                                <div className='flex items-center gap-2'>
                                    <div className='flex gap-1 items-center text-black border-[1px] w-[79px] h-[30px] justify-center rounded-sm'>
                                        <span className='text-[11px] font-semibold'>Hourly</span>
                                    </div>
                                    <div className='flex gap-1 items-center text-[#858383] w-[79px] h-[30px] justify-center rounded-sm'>
                                        <span className='text-[11px] font-semibold'>Daily</span>
                                    </div>
                                    <div className='flex gap-1 items-center text-[#858383] w-[79px] h-[30px] justify-center rounded-sm'>
                                        <span className='text-[11px] font-semibold'>Monthly</span>
                                    </div>
                                    <div className='flex gap-1 items-center text-[#858383] w-[79px] h-[30px] justify-center rounded-sm'>
                                        <span className='text-[11px] font-semibold'>Annual</span>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex items-center gap-1 text-[#2E3032] text-sm'>
                                        <span>NG Rate</span>
                                        <Switch togglePrimary />
                                        <span>PPM</span>
                                    </div>
                                    <div className='flex gap-1 items-center border-[1px] p-1 rounded-sm'>
                                        <HiOutlineDocumentAdd />
                                        <span className='text-[11px] font-semibold'>Export Excel</span>
                                    </div>
                                </div>
                            </div>
                            <img src={chart2} alt='Chart' />
                        </div>
                    </Card>
                </div>
                <div className='flex-1 flex gap-2'>
                    <div className='w-[608px] flex flex-col gap-2'>
                        <div className='h-[143px]'>
                            <div className='h-full flex gap-[15px]'>
                                <div className='w-[141px]'>
                                    <Card>
                                        <span className='bg-[#B6E9D1] h-[32px] rounded-[12px] flex items-center justify-center text-[#084D2D] text-sm'>Quantity OK</span>
                                        <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>342</span>
                                    </Card>
                                </div>
                                <div className='w-[141px]'>
                                    <Card>
                                        <span className='bg-[#FAC5C1] h-[32px] rounded-[12px] flex items-center justify-center text-[#DE1B1B] text-sm'>Quantity NG</span>
                                        <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>127</span>
                                    </Card>
                                </div>
                                <div className='w-[141px]'>
                                    <Card>
                                        <span className='bg-[#FEF4E6] h-[32px] rounded-[12px] flex items-center justify-center text-[#F59F00] text-sm'>Quantity NDF</span>
                                        <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>65</span>
                                    </Card>
                                </div>
                                <div className='w-[141px]'>
                                    <Card>
                                        <span className='bg-[#E7F6FD] h-[32px] rounded-[12px] flex items-center justify-center text-[#229BD8] text-sm'>Quantity INT</span>
                                        <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>34</span>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-1'>
                            <Card>
                                <div className='flex justify-between pb-1'>
                                    <span className='font-bold text-lg'>Manual NG Cause</span>
                                    <NavLink to={ 'log' } className='flex gap-1 items-center border-[1px] px-2 py-1 bg-[#229BD8] text-white rounded-sm'>
                                        <span className='text-[11px] font-semibold'>See All</span>
                                        <HiOutlineChevronRight />
                                    </NavLink>
                                </div>
                                <table class="flex-1">
                                    <thead class="bg-[#D0D3D9] border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                                                Model
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                                                Serial Number
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                                                Judgement
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-5 py-4 text-left">
                                                Capture Image
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                                M-A01
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                                <span className='bg-[#FAC5C1] px-4 py-2 rounded-full text-[#F04438] text-xs '>NO</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                                M-A02
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                                1234567890
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                                <span className='bg-[#FAC5C1] px-4 py-2 rounded-full text-[#F04438] text-xs '>NO</span>
                                            </td>
                                            <td class="text-sm text-[#2064AD] font-light px-6 whitespace-nowrap underline">
                                                view image
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <Card>
                            <div className='flex justify-between pb-1'>
                                <span className='font-bold text-lg'>Manual NG Cause</span>
                                <div className='flex gap-4'>
                                    <div className='flex items-center gap-2 text-[#2E3032] text-sm'>
                                        <Switch togglePrimary />
                                        <span>Inactive</span>
                                    </div>
                                    <div className='flex gap-1 items-center border-[1px] px-2 py-1 bg-[#229BD8] text-white rounded-sm'>
                                        <HiOutlinePlusSm />
                                        <span className='text-[11px] font-semibold'>Add Data</span>
                                    </div>
                                </div>
                            </div>
                            <table class="flex-1">
                                <thead class="bg-[#D0D3D9] border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Model
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            NG Cause
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Timestamp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            M-A01
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            LB-S042
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            9/28/2022 2:23:15 PM
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            M-A01
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            LB-S042
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            9/28/2022 2:23:15 PM
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            M-A01
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            LB-S042
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            9/28/2022 2:23:15 PM
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            M-A01
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            LB-S042
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                                            9/28/2022 2:23:15 PM
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}