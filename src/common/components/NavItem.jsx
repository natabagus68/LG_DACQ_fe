import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretIcon } from "./../components/icons";

export const NavItem = ({
    children,
    label,
    icon = null,
    isActive = false,
    child = false,
    className = null,
    to = undefined,
}) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const toggle = (e) => {
        setActive(!active);
        if (children) setOpen((open) => !open);
    };

    const Child = () => (
        <>
            <div
                className={`${
                    isActive ? "bg-[#383E49] text-white" : "bg-transparent"
                } rounded-[0.5vw] ${
                    child ? "hover:bg-transparent w-fit" : "hover:bg-[#383E49]"
                } hover:text-white w-full h-full flex justify-between items-center px-4`}
            >
                <div className="flex items-center gap-[0.8vw] h-[6vh]">
                    {icon}
                    <span className="font-inter font-medium">{label}</span>
                </div>
                {children && (
                    <CaretIcon
                        className={`transition ${open && "rotate-90"}`}
                    />
                )}
            </div>
            {children && (
                <div
                    className={`${
                        open || active ? `max-h-screen` : `hidden`
                    } w-full ml-7 p-0 mt-2 relative transition-[max-height] hover:text-blue-600`}
                >
                    {children}
                </div>
            )}
        </>
    );

    return to ? (
        <NavLink
            to={to}
            onClick={!child && toggle}
            className={`${
                children ? "h-fit" : "h-[6vh]"
            } text-[#A4A6A8] flex flex-col cursor-pointer`}
        >
            <Child />
        </NavLink>
    ) : (
        <div
            onClick={!child && toggle}
            className={`${
                children ? "h-fit" : "h-[6vh]"
            } text-[#A4A6A8] flex flex-col cursor-pointer`}
        >
            <Child />
        </div>
    );
    // <div className={`${open || active ? `text-green-50 h-auto` : `text-green-200`} py-2 rounded-[6px] overflow-hidden text-[#989a9c] flex items-center flex-col w-full px-[13px] hover:bg-[#383E49] cursor-pointer`}>
    //     <NavLink to={ to } onClick={ toggle } className={ `${({ ispActive }) => isActive ? 'text-green-50' : ''} flex h-full w-full items-center` }>
    //         <div className='flex gap-3 w-full'>
    //             { icon }
    //             { <div className={ `whitespace-nowrap` }>{ label }</div> }
    //         </div>
    //         { children && <CaretIcon className={ `transition ${open && 'rotate-90'}` } /> }
    //     </NavLink>
    //     { children && <div className={ `${(open || active) ? `max-h-screen` : `hidden`} w-full ml-11 p-0 mt-2 relative transition-[max-height]` }>
    //         { children }
    //     </div> }
    // </div>
    // <div className={ `${open || active ? `text-green-50` : `text-green-200`} hover:bg-[#383E49] h-[38px] rounded-[6px] flex items-center justify-between px-2 ${className}` }>
    //     <NavLink to={ to } onClick={ toggle } className={ `${({ ispActive }) => isActive ? 'text-green-50' : ''} flex items-center cursor-pointer w-full` }>
    //         { icon }
    //         { <div className={ `whitespace-nowrap` }>{ label }</div> }
    //         { children && <CaretIcon className={ `ml-auto transition mr-10 ${open && 'rotate-90'}` } /> }
    //     </NavLink>
    //     { children && <div className={ `${(open || active) ? `max-h-screen` : `max-h-0`} -mb-1 pt-2 flex flex-col gap-2 relative transition-[max-height] overflow-hidden pl-[34px] text-green-200 font-body font-semibold` }>
    //         { children }
    //     </div> }
    // </div>
};
