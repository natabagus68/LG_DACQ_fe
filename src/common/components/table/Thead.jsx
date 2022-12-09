import React from 'react';

export const Thead = ({children}) => {
    return (
        <>
            <thead className="font-body bg-[#D0D3D9] text-gray-700">
                {children}
            </thead>
        </>
    );
};
