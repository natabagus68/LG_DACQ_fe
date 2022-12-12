import React, { useEffect } from 'react';
import { useGetAuthenticatedUserQuery } from '../../../app/services/authService';
import { Loader } from '../../../common/components';
import { HomeIcon } from '../../../common/components/icons';
import { Line } from './Line';

export const Dashboard = () => {
    const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
    if (isLoading) return <Loader />;

    return (
        <>
            <div className='relative h-full p-[2%] flex font-inter flex-col gap-5 bg-white'>
                <div className="text-[#514E4E] flex items-center gap-1 mb-3">
                    <HomeIcon width='12px' height='13px' />
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">Dashboard</span>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 1' value={ undefined } detailPath={ `/lines/line-1` } />
                    </div>
                    {/* <div className='w-[265px] h-[162px]'>
                        <Line title='Line 2' value={38} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 3' value={23} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 4' value={22} />
                    </div> */}
                </div>
                {/* <div className='flex justify-between'>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 5' value={32} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 6' value={11} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 7' value={32} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 8' value={43} />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 9' value={2} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 10' value={2} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 11' value={15} />
                    </div>
                    <div className='w-[265px] h-[162px]'>
                        <Line title='Line 12' value={12} />
                    </div>
                </div> */}
            </div>
        </>
    );
};
