import React from "react";
import {
    HomeIcon,
    PlusIcon,
    EyeIcon,
    EditIcon,
    SearchIcon,
    TrashIcon,
} from "../../../common/components/icons";
import { Link, NavLink } from "react-router-dom";
import { config } from "../../../common/utils/config";
import Switch from "../../../common/components/input/Switch";

export const AccountDetail = () => {
    return (
        <>
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#514E4E] flex font-inter items-center gap-1 mb-3">
                    <Link to={`${config.pathPrefix}dashboard`}>
                        <HomeIcon width="12px" height="13px" />
                    </Link>
                    <span className="text-[#A9A8A8] text-sm">/</span>
                    <Link to={`${config.pathPrefix}account`}>Account</Link>
                    <span className="text-[#A9A8A8] text-sm">/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">
                        Detail
                    </span>
                </div>
                <div className="flex-1">
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">
                                Details
                            </span>
                            <div className="flex gap-2">
                                <div className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#667085] h-[32px] rounded-md">
                                    <span>Trash</span>
                                </div>
                                <NavLink
                                    to={"motor"}
                                    className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md"
                                >
                                    <PlusIcon />
                                    <span>Add Data</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="py-[18px] px-[24px] grid lg:grid-cols-2 gap-[147px]">
                            <div className="">
                                <div className="text-[#1A5130] font-semibold text-lg mb-4">
                                    Biodata User
                                </div>
                                <div className="overflow-x-auto">
                                    <div className="grid grid-cols-2 odd:bg-[#EBECEC]">
                                        <div className="py-2 px-4 text-[#343C44] font-semibold">
                                            Name
                                        </div>
                                        <div className="py-2 px-4 text-[#5D6369]">
                                            Afif Chandra
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 odd:bg-[#EBECEC]">
                                        <div className="py-2 px-4 text-[#343C44] font-semibold">
                                            Email
                                        </div>
                                        <div className="py-2 px-4 text-[#5D6369]">
                                            contoh01@mail.com
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 odd:bg-[#EBECEC]">
                                        <div className="py-2 px-4 text-[#343C44] font-semibold">
                                            Role
                                        </div>
                                        <div className="py-2 px-4 text-[#5D6369]">
                                            Super Admin{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-4 text-[#1A5130] font-semibold text-lg">
                                    Photo Profile
                                </div>
                                <div className="rounded-full w-[226px] h-[226px] bg-gray-50 animate-pulse">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
