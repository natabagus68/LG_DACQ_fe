import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "./adminLayoutSlice";
import { useNavigate } from "react-router-dom";
import { HiBell, HiMenu, HiSearch, HiUser } from "react-icons/hi";
import { useGetAuthenticatedUserQuery } from "../../../app/services/authService";
import { Loader } from "../../../common/components";
import appLogo from "../../../assets/app-logo.png";
import { useEffect } from "react";

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
    useEffect(() => {
        console.log(auth)
    }, [auth])

    if (isLoading) return <Loader />;

    return (
        <>
            <div className="border-b-[1px] border-[#514E4E] lg:grid lg:grid-cols-3 flex gap-4 items-center justify-between px-5 py-4 max-h-[72px]">
                <div className="flex gap-4 items-center">
                    <HiMenu
                        onClick={() => dispatch(toggle())}
                        className="cursor-pointer text-[24px] text-white"
                    />
                    {/* <div className="lg:flex hidden items-center border-[1px] border-[#514E4E] rounded-xl px-4 py-3 gap-2">
                        <HiSearch className="text-[20px] text-white" />
                        <input
                            type="text"
                            className="bg-transparent outline-none text-[#fff] font-inter font-normal placeholder:text-[#514E4E]"
                            placeholder="Search..."
                        />
                    </div> */}
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <img src={appLogo} alt="" className="h-12" />
                    <div className="text-white text-xl font-semibold whitespace-nowrap max-w-full overflow-hidden">
                        LG ELECTRONIC INDONESIA
                    </div>
                </div>
                <div className="lg:flex hidden gap-8 justify-end">
                    {/* <div className="relative">
                        <span className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></span>
                        <HiBell className="cursor-pointer text-[24px] text-white" />
                    </div> */}
                    {!auth ? (
                        <span className="text-white">Login</span>
                    ) : (
                        <HiUser
                            onClick={() => navigate("")}
                            className="cursor-pointer text-[24px] text-white"
                        />
                    )}
                </div>
            </div>
        </>
    );
};
