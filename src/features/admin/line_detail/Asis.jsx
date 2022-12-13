
import React, { useMemo } from 'react';
import { HomeIcon } from '../../../common/components/icons';
import { Card } from '../../../common/components/Card';
import { HiOutlineDocumentAdd, HiOutlinePlusSm, HiOutlineChevronRight, HiOutlineDownload, HiOutlineCalendar, HiTrendingDown, HiX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { ChartLine } from '../../../common/components/ChartLine';
import { Alert } from '../../../common/components/Alert';
import ng_image from '../../../assets/ng_image.png';
import { Table } from '../../../common/components/table/Table';
import { useGetLogDataQuery } from './lineDetailSlice';
import { useState } from 'react';
import { useGetLine1AsisNgCountQuery, useGetLine1AsisOkCountQuery, useGetLine1AsisProcessChartQuery, useGetLine1AsisTopTenLogsQuery } from '../../../app/services/asisService';

const AsisChart = ({ frequent }) => {
    const { data: line1AsisProcessChart = [], isLoading: line1AsisProcessChartLoading } = useGetLine1AsisProcessChartQuery(frequent, {
        pollingInterval: 1000,
    });
    const data = useMemo(() => {
        return {
            labels: line1AsisProcessChart.map(item => item?.x || '-'),
            datas: line1AsisProcessChart.map(item => item?.y || 0)
        };
    }, [line1AsisProcessChart]);
    return <ChartLine datas={ data.datas } labels={ data.labels } height='100%' width='100%' />;
};

export const Asis = () => {
    const { data: log, isLoading, isError } = useGetLogDataQuery();
    const { data: line1AsisOkCount, isLoading: line1AsisOkCountLoading } = useGetLine1AsisOkCountQuery();
    const { data: line1AsisNgCount, isLoading: line1AsisNgCountLoading } = useGetLine1AsisNgCountQuery();
    const { data: line1AsisTopTenLogs = [], isLoading: line1AsisTopTenLogsLoading } = useGetLine1AsisTopTenLogsQuery();
    const [frequent, setFrequent] = useState('hourly');
    const [alert, setAlert] = useState();

    const CompExcel = () => {
        return (
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
                        <input type={ 'radio' } name='date' checked />
                        <span className='text-xs'>Latest</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type={ 'radio' } name='date' />
                        <span className='text-xs'>Custom</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <input type={ 'date' } className='flex-1 border-[1px] p-2 rounded-sm outline-none text-[#DADBDB]' />
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
                    <div onClick={ () => setAlert(false) } className='h-[44px] cursor-pointer flex-1 text-[16px] font-medium border-[1px] flex items-center justify-center rounded-md'>Cancel</div>
                    <div className='h-[44px] flex-1 text-[16px] font-medium text-white bg-[#229BD8] flex items-center justify-center rounded-md'>Export</div>
                </div>
            </div>
        );
    };

    const CompAddData = () => {
        return (
            <div className='w-[432px] flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                    <div className='w-12 h-12 flex items-center justify-center bg-[#B3E3F9] rounded-full'>
                        <HiTrendingDown className='text-xl text-[#229BD8]' />
                    </div>
                    <span className='font-medium text-[18px]'>Update NG Cause</span>
                </div>
                <span className='font-medium text-[16px]'>Description</span>
                <div className='flex flex-col'>
                    <textarea className='outline-none border-[1px] h-[185px] p-2' defaultValue={ 'Lorem ipsum dolor sit amet consectetur. Habitasse enim aenean vestibulum Lorem ipsum dolor sit amet consectetur. Habitasse enim aenean vestibulum' } />
                    <div className='flex justify-end'>
                        <span className='text-[12px]'>121/500</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div onClick={ () => setAlert(false) } className='h-[44px] cursor-pointer flex-1 text-[16px] font-medium border-[1px] flex items-center justify-center rounded-md'>Cancel</div>
                    <div className='h-[44px] flex-1 text-[16px] font-medium text-white bg-[#229BD8] flex items-center justify-center rounded-md'>Export</div>
                </div>
            </div>
        );
    };

    const CompImage = () => {
        return (
            <div className='w-[432px] flex flex-col gap-2 items-end'>
                <HiX onClick={ () => setAlert(false) } className='cursor-pointer text-[24px]' />
                <img src={ ng_image } alt='Ex' />
            </div>
        );
    };

    const OpenAlert = () => {
        return (
            <Alert action={ alert.bool }>
                { alert.comp === 'excel' && <CompExcel /> }
                { alert.comp === 'addData' && <CompAddData /> }
                { alert.comp === 'image' && <CompImage /> }
            </Alert>
        );
    };

    return (
        <>
            { alert && <OpenAlert /> }
            <div className='relative h-full p-6 flex font-inter flex-col gap-2 bg-white'>
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
                <div className='flex flex-col flex-1'>
                    <Card>
                        <div className='flex flex-col flex-1 gap-1'>
                            <div className="flex items-center justify-between">
                                <span className='font-bold text-lg'>Asis</span>
                                <div className='flex items-center gap-2'>
                                    <div onClick={ () => setFrequent('hourly') } className={ `flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${frequent == 'hourly' ? 'text-black border-[1px]' : 'text-[#858383]'}` }>
                                        <span className='text-[11px] font-semibold'>Hourly</span>
                                    </div>
                                    <div onClick={ () => setFrequent('daily') } className={ `flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${frequent == 'daily' ? 'text-black border-[1px]' : 'text-[#858383]'}` }>
                                        <span className='text-[11px] font-semibold'>Daily</span>
                                    </div>
                                    <div onClick={ () => setFrequent('monthly') } className={ `flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${frequent == 'monthly' ? 'text-black border-[1px]' : 'text-[#858383]'}` }>
                                        <span className='text-[11px] font-semibold'>Monthly</span>
                                    </div>
                                    <div onClick={ () => setFrequent('annually') } className={ `flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${frequent == 'annually' ? 'text-black border-[1px]' : 'text-[#858383]'}` }>
                                        <span className='text-[11px] font-semibold'>Annual</span>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex items-center gap-2 text-[#2E3032] text-sm'>
                                        <span>NG Rate</span>
                                        <input type="checkbox" />
                                        <span>PPM</span>
                                    </div>
                                    <div onClick={ () => setAlert({ bool: true, comp: 'excel' }) } className='flex gap-1 cursor-pointer items-center border-[1px] p-1 rounded-sm'>
                                        <HiOutlineDocumentAdd />
                                        <span className='text-[11px] font-semibold'>Export Excel</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-full'>
                                <AsisChart frequent={ frequent } />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='grid grid-cols-2 flex-1 gap-2'>
                    <div className='flex-1 flex gap-2 flex-col'>
                        <div className='flex-1 flex gap-2'>
                            <Card>
                                <span className='bg-[#B6E9D1] h-[32px] rounded-[12px] flex items-center justify-center text-[#084D2D] text-sm'>Quantity OK</span>
                                <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>{ line1AsisOkCount }</span>
                            </Card>
                            <Card>
                                <span className='bg-[#FAC5C1] h-[32px] rounded-[12px] flex items-center justify-center text-[#DE1B1B] text-sm'>Quantity NG</span>
                                <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>{ line1AsisNgCount }</span>
                            </Card>
                            {/* <Card>
                                <span className='bg-[#FEF4E6] h-[32px] rounded-[12px] flex items-center justify-center text-[#F59F00] text-sm'>Quantity NDF</span>
                                <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>65</span>
                            </Card>
                            <Card>
                                <span className='bg-[#E7F6FD] h-[32px] rounded-[12px] flex items-center justify-center text-[#229BD8] text-sm'>Quantity INT</span>
                                <span className='text-[#2D2A2A] m-auto text-[40px] font-bold'>34</span>
                            </Card> */}
                        </div>
                        <div className='flex-1 flex flex-col'>
                            <div className='flex justify-between pb-1'>
                                <span className='font-bold text-lg'>Manual NG Cause</span>
                                <NavLink to={ 'log' } className='flex gap-1 items-center border-[1px] px-2 py-1 bg-[#229BD8] text-white rounded-sm'>
                                    <span className='text-[11px] font-semibold'>See All</span>
                                    <HiOutlineChevronRight />
                                </NavLink>
                            </div>
                            <div className='flex flex-1'>
                                <Table>
                                    <Table.Thead>
                                        <Table.Tr>
                                            <Table.Th order={ false }>MODEL</Table.Th>
                                            <Table.Th order={ false }>JUDGEMENT</Table.Th>
                                            {/* <Table.Th order={ false }>CAPTURE IMAGE</Table.Th> */ }
                                        </Table.Tr>
                                    </Table.Thead>
                                    <tbody>
                                        { line1AsisTopTenLogs.map((item, i) => (
                                            <Table.Tr>
                                                <Table.Td className="whitespace-nowrap">{ item.model }</Table.Td>
                                                <Table.Td className="whitespace-nowrap">
                                                    <span className={ `px-3 py-1 rounded-full text-xs ${item.ok ? 'bg-[#B6E9D1] text-[#084D2D]' : 'bg-[#FAC5C1] text-[#F04438]'}` }>{ item.ok ? 'OK' : 'NO' }</span>
                                                </Table.Td>
                                                {/* <Table.Td className="whitespace-nowrap">
                                                    <span className='cursor-pointer underline' onClick={ () => setAlert({ bool: true, comp: 'image' }) }>view image</span>
                                                </Table.Td> */}
                                            </Table.Tr>
                                        )) }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex-1 flex-col flex'>
                        <div className='flex justify-between pb-1'>
                            <span className='font-bold text-lg'>Manual NG Cause</span>
                            <div className='flex gap-4'>
                                <div className='flex items-center gap-2 text-[#2E3032] text-sm'>
                                    <input type='checkbox' />
                                    <span>Inactive</span>
                                </div>
                                <div onClick={ () => setAlert({ bool: true, comp: 'addData' }) } className='flex gap-1 cursor-pointer items-center border-[1px] px-2 py-1 bg-[#229BD8] text-white rounded-sm'>
                                    <HiOutlinePlusSm />
                                    <span className='text-[11px] font-semibold'>Add Data</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-1'>
                            <Table>
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th order={ false }>MODEL</Table.Th>
                                        <Table.Th order={ false }>NG CAUSE</Table.Th>
                                        <Table.Th order={ false }>TIMESTAMP</Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <tbody>
                                    <Table.Tr>
                                        <Table.Td className="whitespace-nowrap">12/12/2022 17:00</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td className="whitespace-nowrap">12/12/2022 17:00</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td className="whitespace-nowrap">12/12/2022 17:00</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                    </Table.Tr>
                                    <Table.Tr>
                                        <Table.Td className="whitespace-nowrap">12/12/2022 17:00</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                        <Table.Td className="whitespace-nowrap">M-A01</Table.Td>
                                    </Table.Tr>
                                </tbody>
                            </Table>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};