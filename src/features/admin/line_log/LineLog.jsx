import React, { useState, useEffect, Fragment } from "react";
import {
    CaretIcon,
    FilterIcon,
    HomeIcon,
    SearchIcon,
} from "../../../common/components/icons";
import { Link, useSearchParams } from "react-router-dom";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { Table } from "../../../common/components/table/Table";
import {
    useGetLine1AsisLogsQuery,
    useLine1AsisUpdateJudgementMutation,
} from "../../../app/services/asisService";
import { OpenAlert } from "../line_detail/Asis";
import { useDispatch } from "react-redux";
import { line1AsisSetSelectedLogImage } from "../line_detail/line1AsisSlice";
import moment from "moment/moment";
import { Dialog, Menu, Transition } from "@headlessui/react";
import AsisConfirmDelete from "./AsisConfirmDelete";
import QuestionIcon from "../../../common/components/icons/QuestionIcon";
import { config } from "../../../common/utils";

const Line1AsisLogTable = ({ alert: _alert }) => {
    const [alert, setAlert] = _alert;
    const dispatch = useDispatch();
    const [queryParam, setQueryParam] = useSearchParams();
    const [qParams, setQParams] = useState({
        page: queryParam.get("page") || 1,
        q: queryParam.get("q") || "",
        per_page: queryParam.get("per_page") || 10,
        judgement: queryParam.get("judgement") || "",
        start_date: !queryParam.get("start_date") || queryParam.get("start_date") == '' || queryParam.get("start_date") == 'undefined' ? moment().startOf('hour').format('YYYY-MM-DDTHH:mm:ss') : queryParam.get("start_date"),
        end_date: !queryParam.get("end_date") || queryParam.get("end_date") == '' || queryParam.get("end_date") == 'undefined' ? moment().endOf('hour').format('YYYY-MM-DDTHH:mm:ss') : queryParam.get("end_date"),
    });
    const { data: line1AsisLogs, isLoading: line1AsisLogsLoading } =
        useGetLine1AsisLogsQuery(qParams);
    const viewImage = (e, image) => {
        e.preventDefault();
        dispatch(line1AsisSetSelectedLogImage(image));
        setAlert({ comp: "image", bool: true });
    };
    const [
        confirmJudgementUpdateVisibility,
        setConfirmJudgementUpdateVisibility,
    ] = useState(false);
    const [_updateAsisJudgement] = useLine1AsisUpdateJudgementMutation();
    const [selectedAsis, setSelectedAsis] = useState({
        id: null,
        judgement: null,
    });
    useEffect(() => {
        setQueryParam(qParams, { replace: true });
    }, [qParams]);
    const updateAsisJudgement = (e) => {
        e.preventDefault();
        _updateAsisJudgement(selectedAsis).then(() => {
            setConfirmJudgementUpdateVisibility(false);
        });
    };
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
                        <option value="int">INT</option>
                        <option value="ndf">NDF</option>
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
                        {(line1AsisLogs?.data || []).map((item, i) => {
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
                                        <Judgement
                                            item={item}
                                            onClick={(e, judgement) => {
                                                setSelectedAsis({
                                                    id: item.id,
                                                    judgement: judgement,
                                                });
                                                setConfirmJudgementUpdateVisibility(
                                                    true
                                                );
                                            }}
                                        />
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
                                        <AsisConfirmDelete asisId={item?.id} />
                                    </Table.Td>
                                </Table.Tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className="flex justify-between items-center pt-4">
                    <div className="rounded px-4 py-2 text-semibold border">
                        TOTAL : {line1AsisLogs?.total}
                    </div>
                    <div className="ml-auto flex">
                        <div
                            className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-l-[5px] flex items-center cursor-pointer"
                            onClick={(e) =>
                                setQParams((qParams) => ({
                                    ...qParams,
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
                        <div
                            className="h-[38px] p-3 border-[1px] border-[#A9A8A8] rounded-r-[5px] flex items-center cursor-pointer"
                            onClick={(e) => {
                                setQParams((qParams) => ({
                                    ...qParams,
                                    page:
                                        parseInt(
                                            line1AsisLogs?.data?.length || 0
                                        ) == qParams.per_page
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
            <ConfirmJudgementUpdate
                isOpen={confirmJudgementUpdateVisibility}
                setIsOpen={setConfirmJudgementUpdateVisibility}
                onSubmit={updateAsisJudgement}
            />
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
                            to={`${config.pathPrefix}lines/line-1/asis`}
                            className="font-semibold text-sm"
                        >
                            ASIS
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
                        <Line1AsisLogTable alert={_alert} />
                    </div>
                </div>
            </div>
        </>
    );
};

const Judgement = ({ item, onClick = () => {} }) => {
    return (
        <>
            <Menu as="div" className={`relativFe w-min`}>
                <Menu.Button
                    as={`div`}
                    className={`flex items-center justify-center gap-2 px-3 py-1 rounded-full 
                ${item?.judgement == "ok" && "text-[#12B76A] bg-[#B6E9D1]"}
                ${item?.judgement == "ng" && "text-[#F04438] bg-[#FAC5C1]"}
                ${item?.judgement == "int" && "text-[#F59F00] bg-[#FEF4E6]"}
                ${item?.judgement == "ndf" && "text-[#229BD8] bg-[#E7F6FD]"}
                text-xs uppercase cursor-pointer hover:shadow`}
                >
                    {item?.judgement}
                    <CaretIcon width={8} className="rotate-90" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-lg bg-white z-20">
                        <div className="rounded-lg overflow-hidden">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={(e) => onClick(e, "ok")}
                                        className="px-3 py-1 text-green-500 w-full hover:bg-gray-50 cursor-pointer"
                                    >
                                        OK
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={(e) => onClick(e, "ng")}
                                        className="px-3 py-1 text-red-500 w-full hover:bg-gray-50 cursor-pointer"
                                    >
                                        NG
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={(e) => onClick(e, "int")}
                                        className="px-3 py-1 text-yellow-500 w-full hover:bg-gray-50 cursor-pointer"
                                    >
                                        INT
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={(e) => onClick(e, "ndf")}
                                        className="px-3 py-1 text-blue-500 w-full hover:bg-gray-50 cursor-pointer"
                                    >
                                        NDF
                                    </div>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

const ConfirmJudgementUpdate = ({ isOpen, setIsOpen, onSubmit }) => {
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-10"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-10"
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
                                <Dialog.Panel className="flex flex-col items-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="text-[#F5827A]">
                                        <QuestionIcon />
                                    </div>
                                    <div className="text-xl font-bold text-[#343C44] mt-9">
                                        Is the data you entered correct?
                                    </div>
                                    <div className="flex flex-1 items-center gap-2 mt-14">
                                        <button
                                            onClick={onSubmit}
                                            className="min-w-[185px] py-3 px-6 text-white bg-[#229BD8] rounded-lg disabled:bg-[#C0C3C5]"
                                            // disabled={destroyAsisIsLoading}
                                        >
                                            Yes, Confirm
                                        </button>
                                        <button
                                            onClick={closeModal}
                                            className="min-w-[185px] py-3 px-6 text-white bg-[#C0C3C5] rounded-lg"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
