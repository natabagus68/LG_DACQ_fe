import React from 'react';

export const PlusIcon = ({ width = 16, height = 16, ...props }) => {
    return (
        <>
            <svg width={ width } height={ height } { ...props } viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3.33203V12.6654" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.33398 8H12.6673" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    );
};
