import React from 'react';

export const Thead = ({children}) => {
    return (
        <>
            <thead className="font-body text-gray-700">
                {children}
            </thead>
        </>
    );
};
