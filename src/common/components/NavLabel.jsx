import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const NavLabel = ({ children, className, ...props }) => {
    const { navOpen } = useSelector(state => state.adminLayout);
    return /**!navOpen &&*/ (
        <>
            <div className={ `my-1 text-green-200  font-semibold ${className}` } { ...props }>{ children }</div>
        </>
    );
};
