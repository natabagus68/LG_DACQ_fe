import React, { useState, useEffect, Fragment } from "react";
import {
    HomeIcon,
    SearchIcon,
    TrashIcon,
} from "../../../common/components/icons";
import { useSearchParams } from "react-router-dom";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { Table } from "../../../common/components/table/Table";
import { useGetLine1AsisLogsQuery } from "../../../app/services/asisService";
import { OpenAlert } from "../line_detail/Asis";
import { useDispatch } from "react-redux";
import { line1AsisSetSelectedLogImage } from "../line_detail/line1AsisSlice";
import moment from "moment/moment";
import { Dialog, Transition } from "@headlessui/react";

const Judgement = ({ item }) => {
    const [show, setShow] = useState(false);
    const selectJudgement = judgement => {
        setShow(false)
    }
    return (
        <>
            <span
                onClick={(e) => setShow((show) => !show)}
                className={`px-2 py-1 rounded-full ${
                    item?.ok
                        ? "text-[#12B76A] bg-[#B6E9D1]"
                        : "text-[#F04438] bg-[#FAC5C1]"
                } text-xs`}
            >
                {item?.ok ? "OK" : "NG"}
            </span>
            <div
                className={`${
                    show ? "block" : "hidden"
                } rounded-xl bg-white overflow-hidden absolute top-12 z-10`}
            >
                <div
                    onClick={(e) => selectJudgement("ok")}
                    className="px-3 py-1 text-green-500 w-full hover:bg-gray-50 cursor-pointer"
                >
                    OK
                </div>
                <div
                    onClick={(e) => selectJudgement("ng")}
                    className="px-3 py-1 text-red-500 w-full hover:bg-gray-50 cursor-pointer"
                >
                    NG
                </div>
                <div
                    onClick={(e) => selectJudgement("int")}
                    className="px-3 py-1 text-yellow-500 w-full hover:bg-gray-50 cursor-pointer"
                >
                    INT
                </div>
                <div
                    onClick={(e) => selectJudgement("ndf")}
                    className="px-3 py-1 text-blue-500 w-full hover:bg-gray-50 cursor-pointer"
                >
                    NDF
                </div>
            </div>
        </>
    );
};

export const Line1AsisLogTable = ({ alert: _alert }) => {
    const [alert, setAlert] = _alert;
    const dispatch = useDispatch();
    const [queryParam, setQueryParam] = useSearchParams();
    const [qParams, setQParams] = useState({
        page: queryParam.get("page") || 1,
        q: queryParam.get("q") || "",
        per_page: queryParam.get("per_page") || 10,
        judgement: queryParam.get("judgement") || "",
        start_date: queryParam.get("start_date") || "",
        end_date: queryParam.get("end_date") || "",
    });
    const { data: line1AsisLogs, isLoading: line1AsisLogsLoading } =
        useGetLine1AsisLogsQuery({
            page: qParams.page,
            q: qParams.q,
            per_page: qParams.per_page,
            judgement: qParams.judgement,
            start_date: qParams.start_date,
            end_date: qParams.end_date,
        });
    useEffect(() => {
        setQueryParam(qParams, { replace: true });
    }, [qParams]);
    const viewImage = (e, image) => {
        e.preventDefault();
        dispatch(line1AsisSetSelectedLogImage(image));
        setAlert({ comp: "image", bool: true });
    };
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
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
                <div className="flex gap-2 items-center">
                    <span>Judgement</span>
                    <select
                        className="px-2 py-1 bg-white border rounded-lg"
                        value={qParams.judgement}
                        onChange={(e) =>
                            setQParams((queryParam) => ({
                                ...queryParam,
                                judgement: e.target.value,
                            }))
                        }
                    >
                        <option value="">All</option>
                        <option value="ng">NG</option>
                        <option value="ok">OK</option>
                    </select>
                </div>
                <div className="flex gap-2 items-center">
                    <span>Date Range :</span>
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
                    -
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
                    {/* <div className="flex items-center shadow-md h-[40px] rounded-[5px] gap-[10px] px-[18px]">
                        Search for Models & SN
                    </div> */}
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
                        {line1AsisLogs?.map((item, i) => {
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
                                    <Table.Td className="whitespace-nowrap py-4 relative">
                                        <Judgement item={item} />
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.ng_cause || "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
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
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        {item?.image_updated_at
                                            ? moment(
                                                  item?.image_updated_at
                                              ).format("DD MMMM YYYY HH:mm:ss")
                                            : "-"}
                                    </Table.Td>
                                    <Table.Td className="whitespace-nowrap py-4 ">
                                        <button
                                            onClick={openModal}
                                            className="bg-[#F04438] rounded-lg px-2 py-1"
                                        >
                                            <TrashIcon
                                                className={`text-white`}
                                            />
                                        </button>
                                    </Table.Td>
                                </Table.Tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className="flex justify-between items-center pt-4">
                    {/* <span className="text-[#646566] text-base">
                        Showing 1 to 10 of 57 entries
                    </span> */}
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
                                        line1AsisLogs.length == qParams.per_page
                                            ? parseInt(qParams.page || 1) + 1
                                            : parseInt(qParams.page || 1),
                                }));
                            }}
                        >
                            Next
                        </div>
                    </div>
                </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={closeModal}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className="mt-2 mb-[55px] flex flex-col items-center ">
                                            <svg
                                                width="94"
                                                height="116"
                                                viewBox="0 0 94 116"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M27.6972 3.22156C27.6974 2.36822 28.0363 1.54986 28.6396 0.946305C29.2428 0.342753 30.061 0.00338957 30.9144 0.00278906L63.0842 0.000976562C63.9378 0.00295535 64.7557 0.343258 65.3588 0.947296C65.9618 1.55133 66.3008 2.36983 66.3014 3.22338V11.1796H27.6972V3.22156ZM80.5907 111.392C80.5087 112.647 79.9502 113.823 79.0297 114.679C78.1091 115.535 76.8961 116.007 75.639 115.998H17.9899C16.7331 115.995 15.524 115.516 14.6056 114.658C13.6872 113.8 13.1274 112.626 13.0386 111.373L8.10543 39.2085H85.8558L80.5918 111.391L80.5907 111.392ZM93.4069 32.6727H0.59375V25.1961C0.59513 23.2132 1.38335 21.3118 2.78534 19.9095C4.18734 18.5072 6.08852 17.7186 8.07145 17.7168L85.9283 17.7143C87.911 17.7174 89.8117 18.5067 91.2132 19.9091C92.6148 21.3116 93.403 23.2127 93.4049 25.1954V32.672L93.4069 32.6727ZM32.056 98.7951C32.056 99.2242 32.1405 99.6491 32.3048 100.046C32.469 100.442 32.7096 100.802 33.0131 101.106C33.3165 101.409 33.6767 101.65 34.0731 101.814C34.4695 101.978 34.8944 102.063 35.3235 102.063C35.7526 102.063 36.1775 101.978 36.5739 101.814C36.9704 101.65 37.3306 101.409 37.634 101.106C37.9374 100.802 38.1781 100.442 38.3423 100.046C38.5065 99.6491 38.591 99.2242 38.591 98.7951V52.9736C38.5841 52.1118 38.2371 51.2877 37.6254 50.6807C37.0137 50.0736 36.187 49.7329 35.3252 49.7326C34.4634 49.7323 33.6365 50.0725 33.0244 50.6791C32.4123 51.2857 32.0646 52.1096 32.0572 52.9713V98.7951H32.056ZM55.3693 98.7951C55.3693 99.6618 55.7136 100.493 56.3265 101.106C56.9393 101.719 57.7705 102.063 58.6373 102.063C59.504 102.063 60.3352 101.719 60.948 101.106C61.5609 100.493 61.9052 99.6618 61.9052 98.7951V52.9736C61.8983 52.1117 61.5512 51.2875 60.9394 50.6804C60.3277 50.0732 59.5008 49.7324 58.6389 49.7321C57.7771 49.7318 56.95 50.0721 56.3378 50.6788C55.7256 51.2854 55.3779 52.1094 55.3704 52.9713L55.3693 98.7951Z"
                                                    fill="#F5827A"
                                                />
                                            </svg>
                                            <div className="mt-9 mb-2 text-2xl font-bold">
                                                Delete?
                                            </div>
                                            <div className="font-semibold text-[#777C82]">
                                                You will delete this file!
                                            </div>
                                        </div>

                                        <div className="flex flex-1 justify-center mt-4">
                                            <button
                                                type="button"
                                                className="justify-center rounded-md px-4 py-2 text-white"
                                                // onClick={closeModal}
                                            >
                                                Yes, Delete it
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </>
    );
};

export const LineLog = () => {
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
                        <span className="font-semibold text-sm">Dashboard</span>
                        <span className="text-sm">/</span>
                        <span className="font-semibold text-sm">Line 1</span>
                        <span className="text-sm">/</span>
                        <span className="font-semibold text-sm">ASIS</span>
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
                        <Line1AsisLogTable alert={_alert} />
                    </div>
                </div>
            </div>
        </>
    );
};
