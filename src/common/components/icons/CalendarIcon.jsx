import React from 'react';

export const CalendarIcon = ({ width = '12', height = '12', fill = "white", ...props }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9471 2.55713V5.93432M7.19268 2.55713V5.93432M2.97119 9.31152H18.1686M4.65979 4.03465H16.48C17.4126 4.03465 18.1686 4.79066 18.1686 5.72325V17.5434C18.1686 18.476 17.4126 19.232 16.48 19.232H4.65979C3.7272 19.232 2.97119 18.476 2.97119 17.5434V5.72325C2.97119 4.79066 3.7272 4.03465 4.65979 4.03465Z" stroke="#A9A8A8" stroke-width="0.949836" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </>
    );
};
