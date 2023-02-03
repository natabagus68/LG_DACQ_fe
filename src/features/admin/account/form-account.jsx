import React from "react";
import { HomeIcon } from "../../../common/components/icons";
import { Link, useParams } from "react-router-dom";
import { config } from "../../../common/utils/config";
import { useGetDetailUserQuery } from "../../../app/services/userService";

export const AccountDetail = () => {
    const { id } = useParams();
    const { data: user, isLoading: userLoading } = useGetDetailUserQuery(id);
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
                                            {user.username}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 odd:bg-[#EBECEC]">
                                        <div className="py-2 px-4 text-[#343C44] font-semibold">
                                            Email
                                        </div>
                                        <div className="py-2 px-4 text-[#5D6369]">
                                            {user.email}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 odd:bg-[#EBECEC]">
                                        <div className="py-2 px-4 text-[#343C44] font-semibold">
                                            Role
                                        </div>
                                        <div className="py-2 px-4 text-[#5D6369]">
                                            {user.roles
                                                .map((item) => item.name)
                                                .join(", ")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="mb-4 text-[#1A5130] font-semibold text-lg">
                                    Photo Profile
                                </div>
                                {userLoading ? (
                                    <div className="rounded-full w-[226px] h-[226px] bg-gray-50 animate-pulse"></div>
                                ) : (
                                    <div className="rounded-full w-[226px] h-[226px] bg-gray-50 animate-pulse">
                                        <img src={user.image} alt="No Image" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
