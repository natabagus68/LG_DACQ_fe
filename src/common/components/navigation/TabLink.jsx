import React from 'react';

export const TabLink = ({ children, label = null, to="", ...props }) => {
    return (
        <>
            <NavLink to={to} className={ ({ isActive }) => `${isActive ? `border-b-2 text-green-500` : `text-gray-200`}  font-semibold text-lg border-green-500 min-w-[148px] pb-3 text-center` } {...props}>
                { label }
                { !label && children }
            </NavLink>
        </>
    );
};
