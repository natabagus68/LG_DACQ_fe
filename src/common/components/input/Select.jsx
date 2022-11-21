import React from 'react';

export const Select = ({ defaultValue = '', className, placeholder, ...props }) => {
    return (
        <>
            <select defaultValue={defaultValue} className={ `appearance-none rounded-lg bg-white py-3 px-4 min-w-[171px] text-center text-gray-200 ${className}` } { ...props }>
                <option value="" disabled>{ placeholder }</option>
            </select>
        </>
    );
};
