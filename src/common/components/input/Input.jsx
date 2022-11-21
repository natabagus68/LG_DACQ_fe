import React from 'react';

export const Input = ({ type = "text", className = "", ...props }) => {
    return (
        <>
            <input type={ type } className={ `border rounded-lg px-3 py-2 text-gray-700 border-sky-base placeholder-sky-base ${className}` } { ...props } />
        </>
    );
};
