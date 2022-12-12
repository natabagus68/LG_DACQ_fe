
import React, { useEffect } from 'react';
import { HomeIcon } from '../../../common/components/icons';
import { Card } from '../../../common/components/Card';
import { Switch } from 'tailgrids-react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { ChartLine } from '../../../common/components/ChartLine';
import { useGetLine1NgRatioQuery } from '../../../app/services/asisService';

export const Line1 = () => {
    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun'],
        datas: [10, 10, 10, 10, 10, 10]
    };

    const { data: asisNgRatio, isLoading: asisNgRateLoading } = useGetLine1NgRatioQuery();

    return (
        <>
            <div className='h-full p-[2%] flex font-inter flex-col bg-white'>
                <div className="text-[#A9A8A8] flex items-center justify-between mb-3">
                    <div className='flex items-center gap-1'>
                        <HomeIcon width='12px' height='13px' />
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm">Dashboard</span>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm text-[#514E4E]">Line 1</span>
                    </div>
                    <div className='flex items-center gap-1 text-[#2E3032] text-sm'>
                        <span>NG Rate</span>
                        <Switch togglePrimary />
                        <span>PPM</span>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-6'>
                    <div className='flex-1 flex justify-between gap-6'>
                        <div className='flex-1'>
                            <Card title='ASIS' subTitle={ asisNgRateLoading ? <>
                                <div className="w-3 h-3 bg-gray-500 animate-pulse rounded"></div>
                            </> : `${asisNgRatio}%` }>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='flex-1'>
                            <Card title='OnePole-TwoPole' subTitle='10%'>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='flex-1'>
                            <Card title='Hipot' subTitle={ `2%` }>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='flex-1'>
                            <Card title='Option Manual' subTitle='19%'>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-between gap-6'>
                        <div className='flex-1'>
                            <Card title='Option Automatic' subTitle='6%'>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='flex-1'>
                            <Card title='White Balance' subTitle='0%'>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='flex-1'>
                            <Card title='DTV Inspection' subTitle='6%'>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='flex-1'>
                            <Card title='Shipmode' subTitle='2%'>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ data.datas } labels={ data.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>M-A01</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>LB</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ 'detail?t=asis' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};