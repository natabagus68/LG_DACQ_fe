import React from 'react';
import { Input } from '../../../common/components/input/Input';
import { Table } from '../../../common/components/table/Table';
import { useGetPositionsQuery } from './employeesApiSlice';

export const Position = () => {
    const divisions = useGetPositionsQuery();
    return (
        <>
            <div className="flex gap-2 font-body text-gray-700 items-center mb-[27px]">
                <Table.ShowFilter />
                <div className="ml-auto">
                    <Input placeholder="search..." />
                </div>
            </div>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Number</Table.Th>
                        <Table.Th>Name</Table.Th>
                        <Table.Th order={ false }>Action</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <tbody>
                    { divisions?.data?.data?.map(item => (
                        <Table.Tr>
                            <Table.Td className="whitespace-nowrap">{ item.number }</Table.Td>
                            <Table.Td className="whitespace-nowrap">{ item.name }</Table.Td>
                            <Table.Td className="whitespace-nowrap"></Table.Td>
                        </Table.Tr>
                    )) }
                </tbody>
            </Table>
        </>
    );
};
