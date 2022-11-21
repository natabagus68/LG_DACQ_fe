import React from 'react';

export const ShowFilter = ({ ...props }) => {
    return (
        <>
            <span className="">Show</span>
            <select { ...props } className="bg-white rounded border px-1" defaultValue={ 10 }>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="">All</option>
            </select>
            <span className="">Entries</span>
        </>
    );
};
