import React, { useState } from "react";
import { HomeIcon, SearchIcon } from "../../../common/components/icons";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { Table } from "../../../common/components/table/Table";
import { useLine1WhiteBalanceLogsQuery } from "../../../app/services/whiteBalanceService";
import { OpenAlert } from "../line_detail/WhiteBalance";
import { useDispatch } from "react-redux";
import moment from "moment";
import { config } from "../../../common/utils";

export const Line1WhiteBalanceLogTable = ({
    perPage: _perPage,
    q: _q,
    page: _page,
    alert: _alert,
}) => {
    const [perPage, setPerpage] = _perPage;
    const [page, setPage] = _page;
    const [q, setQ] = _q;
    const [alert, setAlert] = _alert;
    const dispatch = useDispatch();
    const {
        data: line1WhiteBalanceLogs,
        isLoading: line1WhiteBalanceLogsLoading,
    } = useLine1WhiteBalanceLogsQuery({
        page: page || 1,
        q: q || "",
        per_page: perPage || 10,
    });

    const viewImage = (e, image) => {
        e.preventDefault();
        setAlert({ comp: "image", bool: true });
    };
    return (
        <>
            <div className="py-[18px] px-[24px] flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <span>Show</span>
                    <select
                        className="px-2 py-1 bg-white border rounded-lg"
                        value={perPage}
                        onChange={(e) => setPerpage(e.target.value)}
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>Entries</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center shadow-md h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                        Search for Models & Serial number
                    </div>
                    <div className="flex items-center border-[1px] border-[#A9A8A8] h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                        <SearchIcon width="14" height="14" fill="#514E4E" />
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            type="text"
                            className="bg-transparent outline-none w-[150px] text-[#A4A6A8] font-inter font-normal placeholder:text-[#CACBCD]"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
            <div className="px-[24px] pb-[18px] flex flex-col justify-between">
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                MODEL
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                SERIAL NUMBER
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                X1
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                RANGE X1
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                X2
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                RANGE X2
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                X3
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                RANGE X3
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                X1
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                RANGE X1
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                X2
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                RANGE X2
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                X3
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                RANGE X3
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                JUDGEMENT
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                TIMESTAMP
                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <tbody>
                        {line1WhiteBalanceLogs?.map((item) => {
                            return (
                                <Table.Tr className={`even:bg-[#F8F7FF]`}>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.model || "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.sn || "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.x1 || "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.x1_min || "~"} -{" "}
                                        {item?.x1_max || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.x2 || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.x2_min || "~"} -{" "}
                                        {item?.x2_max || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.x3 || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.x3_min || "~"} -{" "}
                                        {item?.x3_max || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.y1 || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.y1_min || "~"}-
                                        {item?.y1_max || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.y2 || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.y2_min || "~"}-
                                        {item?.y2_max || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.y3 || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.y3_min || "~"}-
                                        {item?.y3_max || "~"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        <span
                                            className={`px-2 py-1 rounded-full ${
                                                item?.ok
                                                    ? "text-[#12B76A] bg-[#B6E9D1]"
                                                    : "text-[#F04438] bg-[#FAC5C1]"
                                            } text-xs`}
                                        >
                                            {item?.ok ? "OK" : "NG"}
                                        </span>
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.logged_at
                                            ? moment(item?.logged_at).format(
                                                  "DD MMMM YYYY HH:mm:ss"
                                              )
                                            : "-"}
                                    </Table.Td>
                                </Table.Tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className="flex justify-between items-center pt-4">
                    {/* <span className="text-[#646566] text-base">Showing 1 to 10 of 57 entries</span> */}
                    <div className="flex ml-auto">
                        <div
                            className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-l-[5px] flex items-center cursor-pointer"
                            onClick={(e) =>
                                setPage((page) => (page > 1 ? page - 1 : 1))
                            }
                        >
                            Previous
                        </div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center bg-[#617E8C] text-white">
                            {page}
                        </div>
                        {/* <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">2</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">3</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">4</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">...</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">8</div> */}
                        <div
                            className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-r-[5px] flex items-center cursor-pointer"
                            onClick={(e) =>
                                setPage((page) =>
                                    line1WhiteBalanceLogs.length == perPage
                                        ? page + 1
                                        : page
                                )
                            }
                        >
                            Next
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const LineLogWhiteBalance = () => {
    const page = useState(1);
    const q = useState("");
    const perPage = useState(10);
    const _alert = useState();
    const [alert, setAlert] = _alert;
    return (
        <>
            {alert && <OpenAlert alert={alert} setAlert={setAlert} />}
            <div className="flex bg-white h-full p-[26px] flex-col font-inter">
                <div className="text-[#A9A8A8] flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                        <HomeIcon width="12px" height="13px" />
                        <span className="text-sm">/</span>
                        <Link
                            to={`${config.pathPrefix}dashboard`}
                            className="font-semibold text-sm"
                        >
                            Dashboard
                        </Link>
                        <span className="text-sm">/</span>
                        <Link
                            to={`${config.pathPrefix}lines/line-1`}
                            className="font-semibold text-sm"
                        >
                            Line 1
                        </Link>
                        <span className="text-sm">/</span>
                        <Link
                            to={`${config.pathPrefix}lines/line-1/white-balance`}
                            className="font-semibold text-sm"
                        >
                            WhiteBalance
                        </Link>
                        <span className="text-sm">/</span>
                        <span className="font-semibold text-sm text-[#514E4E]">
                            Log
                        </span>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-full h-full flex-col flex border-[1px] border-[#EAEAEA] rounded-lg">
                        <div className="flex items-center justify-between py-[8px] px-[24px] bg-[#F7F9FA] border-b-[1px] border-[#E3E5E6]">
                            <span className="text-[20px] font-semibold text-[#383E49]">
                                Log
                            </span>
                            <button
                                disabled
                                className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md"
                            >
                                <HiOutlineArrowCircleDown />
                                <span>Download</span>
                            </button>
                        </div>
                        <Line1WhiteBalanceLogTable
                            page={page}
                            perPage={perPage}
                            q={q}
                            alert={_alert}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
