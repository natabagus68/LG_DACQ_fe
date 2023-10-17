import React, { useState } from "react";
import {
    FilterIcon,
    HomeIcon,
    SearchIcon,
} from "../../../common/components/icons";
import { Link, useSearchParams } from "react-router-dom";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { Table } from "../../../common/components/table/Table";
import { useGetLine1DtvInspectionLogsQuery } from "../../../app/services/dtvInspectionService";
import { OpenAlert } from "../line_detail/DTVInspection";
import { useDispatch } from "react-redux";
import { line1DtvInspectionSetSelectedLogImage } from "../line_detail/line1DTVInspectionSlice";
import moment from "moment/moment";
import { useEffect } from "react";
import { config } from "../../../common/utils";
import DtvInspectionConfirmDelete from "./DtvInspectionConfirmDelete";

export const Line1DtvInspectionLogTable = ({ alert: _alert }) => {
    const [alert, setAlert] = _alert;
    const dispatch = useDispatch();
    const [queryParam, setQueryParam] = useSearchParams();
    const [qParams, setQParams] = useState({
        page: queryParam.get("page") || 1,
        q: queryParam.get("q") || "",
        per_page: queryParam.get("per_page") || 10,
        judgement: queryParam.get("judgement") || "",
        start_date:
            queryParam.get("start_date") !== "undefined"
                ? moment(queryParam.get("start_date")).format(
                      "YYYY-MM-DDTHH:mm"
                  )
                : "",
        end_date:
            queryParam.get("end_date") !== "undefined"
                ? moment(queryParam.get("end_date")).format("YYYY-MM-DDTHH:mm")
                : "",
    });
    const {
        data: line1DtvInspectionLogs,
        isLoading: line1DtvInspectionLogsLoading,
    } = useGetLine1DtvInspectionLogsQuery({
        page: qParams.page,
        q: qParams.q,
        per_page: qParams.per_page,
        judgement: qParams.judgement,
        start_date:
            qParams.start_date !== ""
                ? moment(qParams.start_date).utc().format()
                : "",
        end_date:
            qParams.end_date !== ""
                ? moment(qParams.end_date).utc().format()
                : "",
    });
    useEffect(() => {
        setQueryParam(qParams, { replace: true });
    }, [qParams]);

    const viewImage = (e, image) => {
        e.preventDefault();
        console.log(image);
        dispatch(line1DtvInspectionSetSelectedLogImage(image));
        setAlert({ comp: "image", bool: true });
    };
    useEffect(() => {
        setQueryParam(qParams, { replace: true });
    }, [qParams]);
    return (
        <>
            <div className="py-[18px] px-[24px] flex flex-wrap justify-between items-center">
                <div className="flex gap-2 items-center">
                    <span>Show</span>
                    <select
                        className="px-2 py-1 bg-white border rounded-lg"
                        value={qParams.per_page}
                        onChange={(e) =>
                            setQParams((queryParam) => ({
                                ...queryParam,
                                per_page: e.target.value,
                            }))
                        }
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>Entries</span>
                </div>
                <div className="relative flex gap-2 items-center rounded-lg overflow-hidden border py-3">
                    <div className="absolute top-0 h-full flex justify-center items-center p-3">
                        <FilterIcon
                            width={20}
                            height={20}
                            fill={`#A9A8A8`}
                            className={``}
                        />
                    </div>
                    <select
                        className="pl-10 pr-2 py-1 bg-white rounded-lg"
                        value={qParams.judgement}
                        onChange={(e) =>
                            setQParams((queryParam) => ({
                                ...queryParam,
                                judgement: e.target.value,
                            }))
                        }
                    >
                        <option value="" disabled>
                            Filter Judgement
                        </option>
                        <option value="">All</option>
                        <option value="ng">NG</option>
                        <option value="ok">OK</option>
                    </select>
                </div>
                <div className="flex gap-2 items-center">
                    <span>Start</span>
                    <input
                        className="px-2 py-1 bg-white border rounded-lg"
                        value={qParams.start_date}
                        type="datetime-local"
                        onChange={(e) =>
                            setQParams((queryParam) => ({
                                ...queryParam,
                                start_date: e.target.value,
                            }))
                        }
                    />
                    End
                    <input
                        className="px-2 py-1 bg-white border rounded-lg"
                        value={qParams.end_date}
                        type="datetime-local"
                        onChange={(e) =>
                            setQParams((queryParam) => ({
                                ...queryParam,
                                end_date: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center border-[1px] border-[#A9A8A8] h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                        <SearchIcon width="14" height="14" fill="#514E4E" />
                        <input
                            value={qParams.q}
                            onChange={(e) =>
                                setQParams((queryParam) => ({
                                    ...queryParam,
                                    q: e.target.value,
                                }))
                            }
                            type="text"
                            className="bg-transparent outline-none w-[150px] text-[#A4A6A8] font-inter font-normal placeholder:text-[#CACBCD]"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
            <div className="px-[24px] pb-[18px] flex-1 flex flex-col justify-between">
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
                                JUDGEMENT
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                NG CAUSE
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                CAPTURE IMAGE
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                TIMESTAMP
                            </Table.Th>
                            <Table.Th
                                className="py-4 bg-[#E2F1FF]"
                                order={false}
                            >
                                #
                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <tbody>
                        {line1DtvInspectionLogs?.data?.map((item, i) => {
                            return (
                                <Table.Tr
                                    className={`even:bg-[#F8F7FF]`}
                                    key={i}
                                >
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.model || "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.sn || "-"}
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
                                        {item?.ng_cause || "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {(!item.ok && (
                                            <span
                                                className="cursor-pointer underline"
                                                onClick={(e) =>
                                                    viewImage(
                                                        e,
                                                        item.image_local_path
                                                    )
                                                }
                                            >
                                                view image
                                            </span>
                                        )) ||
                                            "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.time
                                            ? moment(item?.time).format(
                                                  "DD MMMM YYYY HH:mm:ss"
                                              )
                                            : "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        <DtvInspectionConfirmDelete
                                            asisId={item?.id}
                                        />
                                    </Table.Td>
                                </Table.Tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className="flex justify-between items-center pt-4">
                    <div className="rounded px-4 py-2 text-semibold border">
                        TOTAL : {line1DtvInspectionLogs?.total}
                    </div>
                    <div className="ml-auto flex">
                        <div
                            className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-l-[5px] flex items-center cursor-pointer"
                            onClick={(e) =>
                                setQParams((queryParam) => ({
                                    ...queryParam,
                                    page:
                                        parseInt(qParams.page || 1) > 1
                                            ? parseInt(qParams.page || 1) - 1
                                            : 1,
                                }))
                            }
                        >
                            Previous
                        </div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center bg-[#617E8C] text-white">
                            {qParams.page}
                        </div>
                        {/* <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">2</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">3</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">4</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">...</div>
                        <div className="h-[38px] p-3 border-[1px] border-[#A9A8A8] flex items-center">8</div> */}
                        <div
                            className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-r-[5px] flex items-center cursor-pointer"
                            onClick={(e) => {
                                setQParams((queryParam) => ({
                                    ...queryParam,
                                    page:
                                        line1DtvInspectionLogs?.data?.length ==
                                        qParams.per_page
                                            ? parseInt(qParams.page || 1) + 1
                                            : parseInt(qParams.page || 1),
                                }));
                            }}
                        >
                            Next
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const LineLogDTVInspection = () => {
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
                            to={`${config.pathPrefix}lines/line-1/dtv-inspection`}
                            className="font-semibold text-sm"
                        >
                            DTV Inspection
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
                                onClick={(e) =>
                                    setAlert({ comp: "excel", bool: true })
                                }
                                className="flex gap-1 text-white items-center px-[14px] py-[6px] bg-[#229BD8] h-[32px] rounded-md"
                            >
                                <HiOutlineArrowCircleDown />
                                <span>Download</span>
                            </button>
                        </div>
                        <Line1DtvInspectionLogTable alert={_alert} />
                    </div>
                </div>
            </div>
        </>
    );
};
