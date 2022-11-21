import React from 'react';

export const FilterIcon = ({ width = '12', height = '12', fill = "white", ...props }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12.0002L20 4.00024V0.000244141H0V4.00024L8 12.0002V20.0002L12 16.0002V12.0002Z" fill={fill}/>
            </svg>
        </>
    );
};
