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
import { useGetUsersQuery } from "../../../app/services/userService";
import Switch from "../../../common/components/input/Switch";

export const TrashAccount = () => {
    const {
        data: users,
        isLoading: usersIsLoading,
        isError: usersIsError,
        isSuccess: usersIsSuccess,
        errors: usersErrors,
    } = useGetUsersQuery({trashed : true});
    return (
        <>
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#514E4E] flex font-inter items-center gap-1 mb-3">
                    <Link to={`${config.pathPrefix}dashboard`}>
                        <HomeIcon width="12px" height="13px" />
                    </Link>
                    <span className="text-[#A9A8A8] text-sm">/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">
                        Trash Account
                    </span>
                </div>
                <div className="flex-1">
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">
                                Trash Account
                            </span>
                        </div>
                        <div className="py-[18px] px-[24px] flex justify-between items-center">
                            <div className="flex gap-2">
                                <span>Show</span>
                                <input
                                    type="number"
                                    className="w-[62px] pl-2 outline-none border-[1px] "
                                />
                                <span>Entries</span>
                            </div>
                            <div className="flex items-center border-[1px] border-[#A9A8A8] h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                                <SearchIcon
                                    width="14"
                                    height="14"
                                    fill="#514E4E"
                                />
                                <input
                                    type="text"
                                    className="bg-transparent outline-none w-[150px] text-[#A4A6A8] font-inter font-normal placeholder:text-[#CACBCD]"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                        <div className="px-[24px] pb-[18px] flex-1 flex flex-col justify-between">
                            <div className="flex">
                                <table className="flex-1">
                                    <thead className="bg-[#E2F1FF] border-b-2 border-b-[#B6C4CA]">
                                        <tr className="">
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                STATUS
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                NAME
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                EMAIL
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                ROLE
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!usersIsLoading &&
                                            usersIsSuccess &&
                                            users.data?.map((user, iUser) => (
                                                <tr
                                                    key={iUser}
                                                    className="border-b even:bg-[#F8F7FF]"
                                                >
                                                    <td width={200} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {/* <Switch togglePrimary /> */}
                                                        <div className="flex gap-2 text-[#646566]">
                                                            <Switch>
                                                                {({ active }) =>
                                                                    active
                                                                        ? "Active"
                                                                        : "Inactive"
                                                                }
                                                            </Switch>
                                                        </div>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {user.username}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {user.email}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {user.role}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <div className="flex gap-2">
                                                            <Link to={`${config.pathPrefix}account/${user.id}/detail`} className="flex items-center justify-center w-6 h-6 bg-[#2D8DF4] rounded p-1 text-white">
                                                                <EyeIcon />
                                                            </Link>
                                                            <div className="flex items-center justify-center w-6 h-6 bg-[#F79009] rounded p-1 text-white">
                                                                <EditIcon />
                                                            </div>
                                                            <div className="flex items-center justify-center w-6 h-6 bg-[#F04438] rounded p-[6px] text-white">
                                                                <TrashIcon />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-[#646566] text-base">
                                    Showing 1 to 10 of 57 entries
                                </span>
                                <div className="flex">
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-l-[5px] flex items-center">
                                        Previous
                                    </div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center bg-[#617E8C] text-white">
                                        1
                                    </div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">
                                        2
                                    </div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">
                                        3
                                    </div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">
                                        4
                                    </div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">
                                        ...
                                    </div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">
                                        8
                                    </div>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-r-[5px] flex items-center">
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
