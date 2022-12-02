
import React, { Children, useEffect } from 'react';
import { HomeIcon } from '../../../common/components/icons';
import { Card } from '../../../common/components/Card';
import { Switch } from 'tailgrids-react';
import { HiOutlineDocumentAdd, HiOutlinePlusSm, HiOutlineChevronRight, HiOutlineDownload, HiOutlineCalendar, HiTrendingDown, HiX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom';
import { ChartLine } from '../../../common/components/ChartLine';
import { Alert } from '../../../common/components';
import ng_image from '../../../assets/ng_image.png'

export const Shipmode = () => {
    const CompExcel = () => {
        return(
            <div className='w-[432px] flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                    <div className='w-12 h-12 flex items-center justify-center bg-[#B3E3F9] rounded-full'>
                        <HiOutlineDownload className='text-xl text-[#229BD8]' />
                    </div>
                    <span className='font-medium text-[18px]'>Export Excel file</span>
                </div>
                <span className='font-medium text-[16px]'>Select Time </span>
                <div className='flex justify-between'>
                    <div className='h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]'>Hourly</div>
                    <div className='h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]'>Daily</div>
                    <div className='h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]'>Monthly</div>
                    <div className='h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]'>Annual</div>
                </div>
                <div className='flex flex-col gap-2 '>
                    <div className='flex gap-2'>
                        <input type={'radio'} name='date' checked />
                        <span className='text-xs'>Latest</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type={'radio'} name='date' />
                        <span className='text-xs'>Custom</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <input type={'date'} className='flex-1 border-[1px] p-2 rounded-sm outline-none text-[#DADBDB]' />
                    {/* <span className='text-[#DADBDB] text-[15px] font-semibold'>Date</span>
                    <div className='flex justify-between items-center border-[1px] p-2 rounded-sm'>
                        <input type={'text'} placeholder='Enter a date' className='outline-none w-full placeholder:text-[#DADBDB]' />
                        <HiOutlineCalendar className='text-[#DADBDB]' />
                    </div> */}
                </div>
                <div className='flex gap-2'>
                    <select name="time" className='flex-1 border-[1px] p-2 rounded-sm outline-none text-[#DADBDB]'>
                        <option value="1">10:00PM</option>
                    </select>
                    <select name="time" className='flex-1 border-[1px] p-2 rounded-sm outline-none text-[#DADBDB]'>
                        <option value="1">10:00AM</option>
                        <option value="1">10:00AM</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <div onClick={()=>setAlert(false)} className='h-[44px] cursor-pointer flex-1 text-[16px] font-medium border-[1px] flex items-center justify-center rounded-md'>Cancel</div>
                    <div className='h-[44px] flex-1 text-[16px] font-medium text-white bg-[#229BD8] flex items-center justify-center rounded-md'>Export</div>
                </div>
            </div>
        )
    }

    const CompAddData = () => {
        return(
            <div className='w-[432px] flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                    <div className='w-12 h-12 flex items-center justify-center bg-[#B3E3F9] rounded-full'>
                        <HiTrendingDown className='text-xl text-[#229BD8]' />
                    </div>
                    <span className='font-medium text-[18px]'>Update NG Cause</span>
                </div>
                <span className='font-medium text-[16px]'>Description</span>
                <div className='flex flex-col'>
                    <textarea className='outline-none border-[1px] h-[185px] p-2' defaultValue={'Lorem ipsum dolor sit amet consectetur. Habitasse enim aenean vestibulum Lorem ipsum dolor sit amet consectetur. Habitasse enim aenean vestibulum'} />
                    <div className='flex justify-end'>
                        <span className='text-[12px]'>121/500</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div onClick={()=>setAlert(false)} className='h-[44px] cursor-pointer flex-1 text-[16px] font-medium border-[1px] flex items-center justify-center rounded-md'>Cancel</div>
                    <div className='h-[44px] flex-1 text-[16px] font-medium text-white bg-[#229BD8] flex items-center justify-center rounded-md'>Export</div>
                </div>
            </div>
        )
    }

    const CompImage = () => {
        return(
            <div className='w-[432px] flex flex-col gap-2 items-end'>
                <HiX onClick={()=>setAlert(false)} className='cursor-pointer text-[24px]'/>
                <img src={ng_image} alt='Ex' />
            </div>
        )
    }

    const OpenAlert = () => {
        return(
            <Alert action={alert.bool}>
                {alert.comp === 'excel' && <CompExcel />}
                {alert.comp === 'addData' && <CompAddData />}
                {alert.comp === 'image' && <CompImage />}
            </Alert>
        )
    }

    const data = {
        labels: [
            '00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30',
            '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
            '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        ],
        datas: [
            50, 75, 23, 10, 71, 44, 76, 50, 27, 70,
            40, 36, 82, 85, 10, 66, 60, 20, 69, 64, 
            19, 48, 72, 100,78, 70, 51, 30, 14, 83
        ]
    }
    return (
        <>
            {alert && <OpenAlert />}
            <div className='relative h-full p-[2%] flex font-inter flex-col gap-2 bg-white'>
                <div className="text-[#A9A8A8] flex items-center justify-between mb-3">
                    <div className='flex items-center gap-1'>
                        <HomeIcon width='12px' height='13px' />
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">Dashboard</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">Line 1</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm text-[#514E4E]">Shipmode</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Card>
                        <div className='flex flex-col flex-1 gap-1'>
                            <div className="flex items-center justify-between">
                                <span className='font-bold text-lg'>Shipmode</span>
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
                                    <div onClick={()=> setAlert({bool: true, comp: 'excel'})} className='flex gap-1 cursor-pointer items-center border-[1px] p-1 rounded-sm'>
                                        <HiOutlineDocumentAdd />
                                        <span className='text-[11px] font-semibold'>Export Excel</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[250px]'>
                                <ChartLine datas={data.datas} labels={data.labels} height={'250px'} />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='flex-1 flex gap-2'>
                    <div className='w-[608px] flex flex-col gap-2'>
                        <div className='h-[143px]'>
                            <div className='h-full flex gap-[15px]'>
                                <div className='flex-1'>
                                    <Card>
                                        <span className='bg-[#B6E9D1] h-[32px] rounded-[12px] flex items-center justify-center text-[#084D2D] text-sm'>Quantity OK</span>
                                        <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>312</span>
                                    </Card>
                                </div>
                                <div className='flex-1'>
                                    <Card>
                                        <span className='bg-[#FAC5C1] h-[32px] rounded-[12px] flex items-center justify-center text-[#DE1B1B] text-sm'>Quantity NG</span>
                                        <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>123</span>
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
                                                <span className='cursor-pointer' onClick={()=> setAlert({bool: true, comp: 'image'})}>view image</span>
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
                                    <div onClick={()=> setAlert({bool: true, comp: 'addData'})} className='flex gap-1 cursor-pointer items-center border-[1px] px-2 py-1 bg-[#229BD8] text-white rounded-sm'>
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