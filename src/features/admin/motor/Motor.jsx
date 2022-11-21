
import React from 'react';
import { HomeIcon } from '../../../common/components/icons';
import { Card } from './Card';
import servo from '../../../assets/servo.png';
import BarList from './BarList';
import { Data } from './Data';

export const Motor = () => {
    const [userData, setUserData] = React.useState({
        labels: Data.map(e => e.year),
        datasets: [
            {
                label: "Arus",
                data: Data.map(e => e.userGain)
            }
        ]
    })

    return(
        <>
            <div className="flex bg-white h-full p-[26px] flex-col gap-2">
                <div className="text-[#514E4E] flex font-inter items-center gap-1 mb-3">
                    <HomeIcon width='12px' height='13px' />
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#A9A8A8]">Dashboard</span>
                    <span className='text-[#A9A8A8] text-sm'>/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">Motor 1</span>
                </div>
                <div className='flex-1 flex flex-col space-y-[24px]'>
                    <div className='flex-1 flex justify-between'>
                        <div className='w-[351px] h-[297px]'>
                            <Card title='Motor Servo 1'>
                                <div className='flex-1 flex items-center justify-center'>
                                    <img src={servo} alt='Servo' className='w-[207px] h-[212px]' />
                                </div>
                            </Card>
                        </div>
                        <div className='w-[351px] h-[297px]'>
                            <Card title='Arus'>
                                <div className='flex-1 flex items-center justify-center'>
                                    <BarList chartData={userData} />
                                </div>
                            </Card>
                        </div>
                        <div className='w-[351px] h-[297px]'>
                            <Card title='Temperature'>
                                <div className='flex-1 flex items-center justify-center'>
                                    <BarList chartData={userData} />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className='flex-1 flex gap-10'>
                        <div className='w-full'>
                            <Card title='Table'>
                                <div className='flex-1 flex flex-col gap-2'>
                                    <span className='text-[13px] text-[#514E4E]'>Lorem ipsum dolor sit amet, consectetur adipis.</span>
                                    <div className='flex bg-black h-[160px] overflow-auto'>
                                        <table class="flex-1">
                                            <thead class="bg-[#D0D3D9] border-b">
                                                <tr>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        No
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Indicators
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">X1</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Temperature
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        40°C
                                                    </td>
                                                </tr>
                                                <tr class="bg-[#F0F1F3] border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">X2</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Arus
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        1A
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">X3</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Load
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        10V
                                                    </td>
                                                </tr>
                                                <tr class="bg-[#F0F1F3] border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">X2</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Arus
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        1A
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='w-[351px]'>
                            <Card title='Load'>
                                <div className='flex-1 flex items-center justify-center'>
                                    <BarList chartData={userData} />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}