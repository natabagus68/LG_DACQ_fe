
import React, { useEffect } from 'react';
import { HomeIcon } from '../../../common/components/icons';
import { Card } from '../../../common/components/Card';
import { Switch } from 'tailgrids-react';
import chart from '../../../assets/chart.png';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

import { Line } from 'react-chartjs-2';
import { Chart as ChaerJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChaerJS.register( Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler );

export const Lines = () => {
    const options = {
        responsive: false,
        scales: {
            y: {
                min: 0,
                max: 10,
                stepSize: 0,
            },
        },
        maintainAspectRatio: false, 
        plugins: {
            legend: {
              display: false
            }
        },
    };
    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun'],
        datasets: [
            {
                label: 'Data',
                data: [10, 2, 6, 8, 1, 7],
                datasetStrokeWidth : 3,
                pointDotStrokeWidth : 4,
                backgroundColor: '#0BA5EC',
                borderColor: '#0BA5EC',
                tension: 0.5,
                pointRadius: 2,
                borderWidth: 1,
                fill: {
                    target: "origin", // 3. Set the fill options
                    above: "rgba(255, 0, 0, 0.1)"
                }
            }
        ]
    }
    return (
        <>
            <div className='relative h-full p-[2%] flex font-inter flex-col bg-white'>
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
                <div className='flex justify-between'>
                    <div className='w-[265px] h-[329px]'>
                        <Card title='ASIS' subTitle='2%'>
                            <div className='flex flex-col justify-between flex-1'>
                                <div className='flex gap-[14px] items-center'>
                                    <Line data={data} height="175px" width="233px" options={options} />
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
                                        <NavLink to={ 'detail' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                            <span>Details</span>
                                            <HiOutlineChevronRight />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='w-[265px] h-[329px]'>
                        <Card title='ASIS' subTitle='2%'>
                            <div className='flex flex-col justify-between flex-1'>
                                <div className='flex gap-[14px] items-center'>
                                    <Line data={data} height="175px" width="233px" options={options} />
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
                                        <NavLink to={ 'detail' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                            <span>Details</span>
                                            <HiOutlineChevronRight />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='w-[265px] h-[329px]'>
                        <Card title='ASIS' subTitle='2%'>
                            <div className='flex flex-col justify-between flex-1'>
                                <div className='flex gap-[14px] items-center'>
                                    <Line data={data} height="175px" width="233px" options={options} />
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
                                        <NavLink to={ 'detail' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
                                            <span>Details</span>
                                            <HiOutlineChevronRight />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='w-[265px] h-[329px]'>
                        <Card title='ASIS' subTitle='2%'>
                            <div className='flex flex-col justify-between flex-1'>
                                <div className='flex gap-[14px] items-center'>
                                    <Line data={data} height="175px" width="233px" options={options} />
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
                                        <NavLink to={ 'detail' } className='flex items-center gap-1 text-[#4E5BA6] text-xs font-medium'>
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
        </>
    );
}