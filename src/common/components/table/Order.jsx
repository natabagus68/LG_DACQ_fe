import React, { useState } from 'react';

export const Order = () => {
    const [direction, setDirection] = useState(null);
    const toggle = e => {
        e.preventDefault();
        setDirection(direction => {
            if (direction == null) return 'asc';
            if (direction == 'desc') return null;
            return 'desc';
        });
    };
    return (
        <>
            <div onClick={ toggle } className="flex flex-col gap-1 -mr-5 cursor-pointer">
                <svg width={ 12 } height={ 6 } viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0L11.1962 6H0.803848L6 0Z" className={ direction == 'asc' ? 'fill-green-500' : 'fill-[#C8CCD2]' } />
                </svg>
                <svg width={ 12 } height={ 6 } viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L11.1962 0H0.803848L6 6Z" className={ direction == 'desc' ? 'fill-green-500' : 'fill-[#C8CCD2]' } />
                </svg>
            </div>
        </>
    );
};
