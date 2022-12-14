import React from 'react';

export const Tr = ({ children, ...props }) => {
    return (
        <>
            <tr { ...props }>
                {children}
            </tr>
        </>
    );
};
