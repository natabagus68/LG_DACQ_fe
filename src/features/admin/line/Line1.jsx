import React, { useState } from 'react';
import { HomeIcon } from '../../../common/components/icons';
import { Card } from '../../../common/components/Card';
import { Switch } from '@headlessui/react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { ChartLine } from '../../../common/components/ChartLine';
import { config } from '../../../common/utils';
import { useMemo } from 'react';
import { useGetLine1AsisChartLastWeekQuery, useGetLine1AsisTopNgCauseQuery, useGetLine1NgRatioQuery } from '../../../app/services/asisService';
import { useGetLine1OnepoleTwopoleChartLastWeekQuery, useGetLine1OnepoleTwopoleTopNgCauseQuery, useGetLine1NgRatioOnepoleTwopoleQuery, useLine1OnepoleTwopoleTopManualNgQuery } from '../../../app/services/onepoleTwopoleService';

export const Line1 = () => {
    const [ppmOn, setPpmOn] = useState(false);
    const { data: line1AsisChartLastWeek = [] } = useGetLine1AsisChartLastWeekQuery(null, {
        pollingInterval: 1000,
    });
    const { data: line1AsisTopNgCause } = useGetLine1AsisTopNgCauseQuery(null, {
        pollingInterval: 1000,
    });
    const { data: line1AsisNgRatio, isLoading: line1AsisNgRatioLoading } = useGetLine1NgRatioQuery(null, {
        pollingInterval: 1000,
    });
    const { data: line1OnepoleTwopoleChartLastWeek = [] } = useGetLine1OnepoleTwopoleChartLastWeekQuery(null, {
        pollingInterval: 1000,
    });
    const { data: line1OnepoleTwopoleTopNgCause } = useGetLine1OnepoleTwopoleTopNgCauseQuery(null, {
        pollingInterval: 1000,
    });
    const { data: line1OnepoleTwopoleNgRatio, isLoading: line1OnepoleTwopoleNgRatioLoading } = useGetLine1NgRatioOnepoleTwopoleQuery(null, {
        pollingInterval: 1000,
    });
    const { data: line1OnepoleTwopoleTopManualNg, isLoading: line1OnepoleTwopoleTopManualNgLoading } = useLine1OnepoleTwopoleTopManualNgQuery(null, {
        pollingInterval: 1000,
    });

    const asisChartData = useMemo(() => {
        return {
            labels: line1AsisChartLastWeek.map(item => item?.x || '-'),
            datas: line1AsisChartLastWeek.map(item => (item?.y || 0) * (ppmOn ? 10000 : 1))
        };
    }, [line1AsisChartLastWeek, ppmOn]);

    const onepoleTwopoleChartData = useMemo(() => {
        return {
            labels: line1OnepoleTwopoleChartLastWeek.map(item => item?.x || '-'),
            datas: line1OnepoleTwopoleChartLastWeek.map(item => (item?.y || 0) * (ppmOn ? 10000 : 1))
        };
    }, [line1OnepoleTwopoleChartLastWeek, ppmOn]);

    return (
        <>
            <div className='h-full p-[2%] flex font-inter flex-col bg-white'>
                <div className="text-[#A9A8A8] flex items-center justify-between mb-3">
                    <div className='flex items-center gap-1'>
                        <HomeIcon width='12px' height='13px' />
                        <span className='text-sm'>/</span>
                        <Link to={ `${config.pathPrefix}dashboard` } className="font-semibold text-sm">Dashboard</Link>
                        <span className='text-sm'>/</span>
                        <span className="font-semibold text-sm text-[#514E4E]">Line 1</span>
                    </div>
                    <div className='flex items-center gap-1 text-[#2E3032] text-sm'>
                        <span>NG Rate</span>
                        {/* <Switch togglePrimary /> */ }
                        <Switch
                            as={ `div` }
                            checked={ ppmOn }
                            onChange={ setPpmOn }
                            className={ `${ppmOn ? 'bg-blue-600' : 'bg-gray-200'
                                } cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full` }
                        >
                            <span className="sr-only">Enable notifications</span>
                            <span
                                className={ `${ppmOn ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition` }
                            />
                        </Switch>
                        <span>PPM</span>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-6'>
                    <div className='flex-1 grid lg:grid-cols-4 justify-between gap-6'>
                        <div className='flex-1'>
                            <Card title='ASIS' subTitle={ line1AsisNgRatioLoading ? <>
                                <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                            </> : `${line1AsisNgRatio.toFixed(1)}%` }>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ asisChartData.datas } labels={ asisChartData.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                        <div className='border-[1px] rounded-xl flex justify-between'>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1 border-r'>
                                                <span className='text-xs font-bold text-[#12B76A]'>{ line1AsisTopNgCause?.model || '-' }</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>Model Name</span>
                                            </div>
                                            <div className='flex flex-col justify-center items-center py-2 flex-1'>
                                                <span className='text-xs font-bold text-[#12B76A]'>{ line1AsisTopNgCause?.ng_cause || '-' }</span>
                                                <span className='text-[10px] text-[#858383] font-medium'>NG Summary</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ `asis` } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='flex-1'>
                            <Card title='OnePole-TwoPole' subTitle={ line1OnepoleTwopoleNgRatioLoading ? <>
                                <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                            </> : `${(line1OnepoleTwopoleNgRatio || 0).toFixed(1)}%` }>
                                <div className='flex flex-col justify-between flex-1'>
                                    <div className='flex gap-[14px] items-center flex-1'>
                                        <ChartLine datas={ onepoleTwopoleChartData.datas } labels={ onepoleTwopoleChartData.labels } width={ '100%' } height={ '100%' } />
                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <div className='border-[1px] rounded-xl flex flex-col justify-between p-2'>
                                            <span className='text-[10px] text-[#514E4E] font-medium'>NG Cause</span>
                                            <span className='text-[10px] text-[#858383] font-medium'>{ line1OnepoleTwopoleTopManualNg?.[(line1OnepoleTwopoleTopManualNg?.length || 0) - 1]?.description || '-' }</span>
                                        </div>
                                        <div className='flex justify-end pt-2'>
                                            <NavLink to={ `onepole-twopole` } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        {/* <div className='flex-1'>
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
                        </div> */}

                        {/* <div className='flex-1'>
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
                        </div> */}
                    </div>
                    <div className='flex-1 flex justify-between gap-6'>
                        {/* <div className='flex-1'>
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
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};