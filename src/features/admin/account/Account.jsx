import React from "react";
import {
    HomeIcon,
    PlusIcon,
    EyeIcon,
    EditIcon,
    SearchIcon,
    TrashIcon,
} from "../../../common/components/icons";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { config } from "../../../common/utils/config";
import {
    useGetUsersQuery,
    userService,
    useToogleActiveUserMutation,
} from "../../../app/services/userService";
import Switch from "../../../common/components/input/Switch";
import { useState } from "react";
import { useEffect } from "react";

let timeoutDebounce = null;

const debounce = (f) => {
    if (timeoutDebounce) clearTimeout(timeoutDebounce);
    timeoutDebounce = setTimeout(() => f(), 250);
};

export const Account = () => {
    const [userParams, setUserParams] = useState({
        page: 1,
        q: "",
        per_page: 10,
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        data: users = {},
        isLoading: usersIsLoading,
        isSuccess: usersIsSuccess,
    } = useGetUsersQuery();
    const [toogleActiveUser] = useToogleActiveUserMutation();
    useEffect(() => {
        debounce(() => {
            userService.endpoints.getUsers.initiate(userParams);
        });
    }, [userParams]);
    return (
        <>
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#514E4E] flex font-inter items-center gap-1 mb-3">
                    <Link to={`${config.pathPrefix}dashboard`}>
                        <HomeIcon width="12px" height="13px" />
                    </Link>
                    <span className="text-[#A9A8A8] text-sm">/</span>
                    <span className="font-semibold text-sm text-[#514E4E]">
                        Account
                    </span>
                </div>
                <div className="flex-1">
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">
                                Account
                            </span>
                            <div className="flex gap-2">
                                <Link
                                    to={`${config.pathPrefix}account/trashed`}
                                    className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#667085] h-[32px] rounded-md"
                                >
                                    <span>Trash</span>
                                </Link>
                                <NavLink
                                    to={`${config.pathPrefix}account/create`}
                                    className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md"
                                >
                                    <PlusIcon />
                                    <span>Add Data</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className="py-[18px] px-[24px] flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span>Show</span>
                                <select
                                    onChange={(e) =>
                                        setUserParams((d) => ({
                                            ...d,
                                            per_page: e.target.value,
                                        }))
                                    }
                                    className="rounded px-3 py-1 bg-white border"
                                    name="show"
                                    id="show_input"
                                >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="100">100</option>
                                </select>
                                <span>Entries</span>
                            </div>
                            <div className="flex items-center border-[1px] border-[#A9A8A8] h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                                <SearchIcon
                                    width="14"
                                    height="14"
                                    fill="#514E4E"
                                />
                                <input
                                    onChange={(e) =>
                                        setUserParams((p) => ({
                                            ...p,
                                            q: e.target.value,
                                        }))
                                    }
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
                                                    <td
                                                        width={200}
                                                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                                    >
                                                        {/* <Switch togglePrimary /> */}
                                                        <div className="flex gap-2 text-[#646566]">
                                                            <Switch
                                                                defaultValue={
                                                                    user.active_at &&
                                                                    user.active_at !==
                                                                        null
                                                                }
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    toogleActiveUser(
                                                                        user.id
                                                                    );
                                                                }}
                                                            >
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
                                                            <Link
                                                                to={`${config.pathPrefix}account/${user.id}/detail`}
                                                                className="flex items-center justify-center w-6 h-6 bg-[#2D8DF4] rounded p-1 text-white"
                                                            >
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
                                    Total : {users.total}
                                </span>
                                <div className="flex">
                                    <button
                                        onClick={(e) =>
                                            setUserParams((p) => ({
                                                ...p,
                                                page: p.page - 1,
                                            }))
                                        }
                                        disabled={userParams.page == 1}
                                        className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-l-[5px] flex items-center cursor-pointer hover:shadow disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center bg-[#617E8C] text-white">
                                        {userParams.page}
                                    </div>
                                    <button
                                        onClick={(e) =>
                                            setUserParams((p) => ({
                                                ...p,
                                                page: p.page + 1,
                                            }))
                                        }
                                        disabled={
                                            users.total > userParams.per_page
                                        }
                                        className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-r-[5px] flex items-center cursor-pointer hover:shadow disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
