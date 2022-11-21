import React from 'react';
import { useParams } from 'react-router-dom';
import { PenAltIcon } from '../../../common/components/icons';
import { useGetEmployeeByIdQuery } from './employeesApiSlice';

export const ShowEmployee = () => {
    const { employeeId } = useParams();
    const { data: { data: employee } = { data: {} }, isError, isLoading, isSuccess } = useGetEmployeeByIdQuery(employeeId);
    return (
        <div>
            <div className="flex gap-3 text-gray-foundation-500 font-body mb-6">
                <a>Menu</a>/
                <a>Data</a>/
                <a>Master Data</a>/
                <a>Employee Data</a>/
                <div className="text-gray-700">Detail Employee</div>
            </div>
            <div className="shadow-lg rounded-xl overflow-hidden border border-sky-light bg-teal-50">
                <div className="flex justify-between bg-white border-b border-sky-light py-[23px] px-[24px]">
                    <div className="text-green-500 text-2xl font-semibold">User Information</div>
                    <button className="flex gap-2 px-3 py-1 rounded-md bg-green-500 text-white font-semibold">
                        <PenAltIcon />
                        Edit Data
                    </button>
                </div>
                <div className="flex gap-16 px-12 py-6">
                    <div className="flex-[50%] rounded-xl bg-white px-6 py-6">
                        <div className="text-green-500 text-lg font-semibold mb-[37px]">Biodata User</div>
                        <div className="flex flex-col">
                            <div className="px-3 py-1 odd:bg-gray-50 flex">
                                <div className="flex-[50%] text-gray-foundation-500 font-semibold">Name</div>
                                <div className="flex-[50%] text-gray-400">{ !isLoading && employee.name }</div>
                            </div>
                            <div className="px-3 py-1 odd:bg-gray-50 flex">
                                <div className="flex-[50%] text-gray-foundation-500 font-semibold">NPK</div>
                                <div className="flex-[50%] text-gray-400">{ !isLoading && employee.npk }</div>
                            </div>
                            <div className="px-3 py-1 odd:bg-gray-50 flex">
                                <div className="flex-[50%] text-gray-foundation-500 font-semibold">Email</div>
                                <div className="flex-[50%] text-gray-400">{ !isLoading && employee.email }</div>
                            </div>
                            <div className="px-3 py-1 odd:bg-gray-50 flex">
                                <div className="flex-[50%] text-gray-foundation-500 font-semibold">Position</div>
                                <div className="flex-[50%] text-gray-400">{ !isLoading && employee.position }</div>
                            </div>
                            <div className="px-3 py-1 odd:bg-gray-50 flex">
                                <div className="flex-[50%] text-gray-foundation-500 font-semibold">Division</div>
                                <div className="flex-[50%] text-gray-400">{ !isLoading && employee.division }</div>
                            </div>
                            <div className="px-3 py-1 odd:bg-gray-50 flex">
                                <div className="flex-[50%] text-gray-foundation-500 font-semibold">Shift</div>
                                <div className="flex-[50%] text-gray-400">{ !isLoading && employee.shift }</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[50%] rounded-xl bg-white px-6 py-6">
                        <div className="text-green-500 text-lg font-semibold">Photo Profile</div>
                        <div className="w-[226px] h-[226px] rounded-full overflow-hidden">
                            { !isLoading && <img src={ employee.photo } alt="" /> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
