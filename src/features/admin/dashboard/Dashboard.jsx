import React, { useEffect } from 'react';
import { useGetAuthenticatedUserQuery } from '../../../app/services/authService';
import { Loader } from '../../../common/components';
import { HomeIcon } from '../../../common/components/icons';
import { config } from '../../../common/utils';
import { humanFileSize } from '../../../common/utils/humanFileSize';
import useDiskInfo from '../line/disk-info';
import { Line } from './Line';

export const Dashboard = () => {
    const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
    if (isLoading) return <Loader />;
    const diskInfo = useDiskInfo();
    return (
        <>
            <div className='relative h-full py-4 px-6 flex font-inter flex-col gap-4 bg-white'>
                <div className="text-[#514E4E] flex items-center gap-1">
                    <HomeIcon width='12px' height='13px' />
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">Dashboard</span>
                    { diskInfo.disk.map(item => (
                        <div className="px-3 py-1 rounded flex gap-4 ml-auto border">
                            <span>Mounted : { item.mounted }</span>
                            <span>Blocks : { humanFileSize(item.blocks) }</span>
                            <span>Free : { humanFileSize(item.available) }</span>
                            <span>Used : { humanFileSize(item.used) }</span>
                        </div>
                    )) }
                </div>
                <div className='flex justify-between'>
                    <div className='w-[265px]'>
                        <Line title='Line 1' value={ undefined } detailPath={ `${config.pathPrefix}lines/line-1` } />
                    </div>
                </div>
            </div>
        </>
    );
};
