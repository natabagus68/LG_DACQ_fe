import React, { useEffect, useMemo, useRef } from "react";
import {
    HomeIcon,
    ManualNgIcon,
    NgCauseIcon,
} from "../../../common/components/icons";
import { Card } from "../../../common/components/Card";
import {
    HiOutlineDocumentAdd,
    HiOutlinePlusSm,
    HiOutlineChevronRight,
    HiOutlineDownload,
    HiOutlineCalendar,
    HiTrendingDown,
    HiX,
} from "react-icons/hi";
import { Link, useSearchParams } from "react-router-dom";
import { ChartLine } from "../../../common/components/ChartLine";
import { Alert } from "../../../common/components/Alert";
import ng_image from "../../../assets/ng_image.png";
import { Table } from "../../../common/components/table/Table";
import { useState } from "react";
import {
    useGetLine1OptionManualCountQuery,
    useGetLine1OptionManualProcessChartQuery,
    useGetLine1OptionManualTopTenLogsQuery,
    useGetLine1OptionManualTop5NgCauseQuery,
    useLine1OptionManualTopManualNgQuery,
    useLine1OptionManualUpdateManualNgMutation,
    useLine1OptionManualSyncMutation,
} from "../../../app/services/optionManualService";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { line1OptionManualSetManualNg } from "./line1OptionManualSlice";
import { config } from "../../../common/utils";
import { Input } from "../../../common/components/input/Input";
import SyncIcon from "../../../common/components/icons/SyncIcon";
import { getElementAtEvent } from "react-chartjs-2";
import moment from "moment";

const OptionManualChart = ({
    searchParams,
    setSearchParams,
    ppmOn,
    ngRate,
    setNgRate,
}) => {
    const interval = useSelector((state) => state.setting.interval);
    const chartRef = useRef();
    const {
        data: line1OptionManualProcessChart = [],
        isLoading: line1OptionManualProcessChartLoading,
    } = useGetLine1OptionManualProcessChartQuery(searchParams.frequent, {
        pollingInterval: interval,
    });
    const data = useMemo(() => {
        return {
            labels: line1OptionManualProcessChart.map((item) => item?.x || "-"),
            datas: line1OptionManualProcessChart.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1OptionManualProcessChart, ppmOn]);
    const dispatch = useDispatch();
    const [selectedChart, setSelectedChart] = useState(false);
    useEffect(() => {
        setNgRate(
            parseFloat(
                data?.datas[
                    selectedChart == false
                        ? data?.datas?.length - 1
                        : selectedChart
                ]
            ).toFixed(2)
        );
    }, [data, selectedChart]);
    return (
        <ChartLine
            datas={data.datas}
            labels={data.labels}
            height={'100%'}
            width="100%"
            ref={chartRef}
            onClick={(event) => {
                const [lineEl] = getElementAtEvent(chartRef.current, event);
                setSelectedChart(lineEl.index);
                if (lineEl) {
                    let from_date = moment(
                        line1OptionManualProcessChart?.[lineEl.index]?.x,
                        "hh-mm"
                    )
                        .add(-1, "hour")
                        .startOf("hour")
                        .utc();
                    let to_date = moment(
                        line1OptionManualProcessChart?.[lineEl.index]?.x,
                        "hh-mm"
                    )
                        .add(-1, "hour")
                        .endOf("hour")
                        .utc();
                    switch (searchParams.frequent) {
                        case "daily":
                            from_date = moment(
                                line1OptionManualProcessChart?.[lineEl.index]?.x,
                                "DD-MMM"
                            )
                                .startOf("day")
                                .utc();
                            to_date = moment(
                                line1OptionManualProcessChart?.[lineEl.index]?.x,
                                "DD-MMM"
                            )
                                .endOf("day")
                                .utc();
                            break;
                        case "monthly":
                            from_date = moment(
                                line1OptionManualProcessChart?.[lineEl.index]?.x,
                                "MMM"
                            )
                                .startOf("month")
                                .utc();
                            to_date = moment(
                                line1OptionManualProcessChart?.[lineEl.index]?.x,
                                "MMM"
                            )
                                .endOf("month")
                                .utc();
                            break;
                        case "annually":
                            from_date = moment(
                                line1OptionManualProcessChart?.[lineEl.index]?.x,
                                "YYYY"
                            )
                                .startOf("year")
                                .utc();
                            to_date = moment(
                                line1OptionManualProcessChart?.[lineEl.index]?.x,
                                "YYYY"
                            )
                                .endOf("year")
                                .utc();
                            break;
                        default:
                            break;
                    }
                    setSearchParams((searchParams) => ({
                        ...searchParams,
                        from_date: from_date.format(),
                        to_date: to_date.format(),
                    }));
                }
            }}
        />
    );
};

const CompExcel = ({ setAlert }) => {
    return (
        <div className="w-[432px] flex flex-col gap-2">
            <div className="flex gap-4 items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#B3E3F9] rounded-full">
                    <HiOutlineDownload className="text-xl text-[#229BD8]" />
                </div>
                <span className="font-medium text-[18px]">
                    Export Excel file
                </span>
            </div>
            <span className="font-medium text-[16px]">Select Time </span>
            <div className="flex justify-between">
                <div className="h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]">
                    Hourly
                </div>
                <div className="h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]">
                    Daily
                </div>
                <div className="h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]">
                    Monthly
                </div>
                <div className="h-[40px] w-[100px] border-[1px] flex items-center justify-center text-[14px] text-[#2D2A2A]">
                    Annual
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <div className="flex gap-2">
                    <input type={"radio"} name="date" checked />
                    <span className="text-xs">Latest</span>
                </div>
                <div className="flex gap-2">
                    <input type={"radio"} name="date" />
                    <span className="text-xs">Custom</span>
                </div>
            </div>
            <div className="flex flex-col">
                <input
                    type={"date"}
                    className="flex-1 border-[1px] p-2 rounded-sm outline-none text-[#DADBDB]"
                />
            </div>
            <div className="flex gap-2">
                <select
                    name="time"
                    className="flex-1 border-[1px] p-2 rounded-sm outline-none text-[#DADBDB]"
                >
                    <option value="1">10:00PM</option>
                </select>
                <select
                    name="time"
                    className="flex-1 border-[1px] p-2 rounded-sm outline-none text-[#DADBDB]"
                >
                    <option value="1">10:00AM</option>
                    <option value="1">10:00AM</option>
                </select>
            </div>
            <div className="flex gap-2">
                <div
                    onClick={() => setAlert(false)}
                    className="h-[44px] cursor-pointer flex-1 text-[16px] font-medium border-[1px] flex items-center justify-center rounded-md"
                >
                    Cancel
                </div>
                <div className="h-[44px] flex-1 text-[16px] font-medium text-white bg-[#229BD8] flex items-center justify-center rounded-md">
                    Export
                </div>
            </div>
        </div>
    );
};

const CompAddData = ({ setAlert }) => {
    const [description, _setDescription] = useState("");
    const setDescription = (payload) => {
        if (payload.length > 500) return;
        return _setDescription(payload);
    };
    const [
        line1OptionManualUpdateManualNg,
        {
            error: line1OptionManualUpdateManualNgError,
            isLoading: line1OptionManualUpdateManualNgLoading,
        },
    ] = useLine1OptionManualUpdateManualNgMutation();
    const line1OptionManualSubmitManualNg = (e) => {
        e.preventDefault();
        line1OptionManualUpdateManualNg(description);
    };
    return (
        <form onSubmit={line1OptionManualSubmitManualNg}>
            <div className="w-[432px] flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <NgCauseIcon />
                    <span className="font-medium text-[18px]">
                        Update NG Cause
                    </span>
                </div>
                <span className="font-medium text-[16px]">Description</span>
                <div className="flex flex-col">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="outline-none border rounded-xl h-[185px] px-4 py-3"
                    />
                    <div className="flex justify-end">
                        <span className="text-[12px]">
                            {description.length}/500
                        </span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        role="button"
                        onClick={() => setAlert(false)}
                        className="h-[44px] cursor-pointer flex-1 text-[16px] font-medium border-[1px] flex items-center justify-center rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="h-[44px] flex-1 text-[16px] font-medium text-white bg-[#229BD8!important] flex items-center justify-center rounded-md"
                    >
                        Upload
                    </button>
                </div>
            </div>
        </form>
    );
};

export const CompImage = ({ setAlert }) => {
    const selectedLogImage = useSelector(
        (state) => state.line1OptionManual.selectedLogImage
    );
    useEffect(() => {
        console.log(`${config.assetUrl}${selectedLogImage}`);
    }, [selectedLogImage]);
    return (
        <div className="w-[432px] flex flex-col gap-2 items-end">
            <HiX
                onClick={() => setAlert(false)}
                className="cursor-pointer text-[24px]"
            />
            <img src={`${config.assetUrl}${selectedLogImage}`} alt="" />
        </div>
    );
};

export const OpenAlert = ({ alert, setAlert }) => {
    return (
        <Alert action={alert.bool}>
            {alert.comp === "excel" && <CompExcel setAlert={setAlert} />}
            {alert.comp === "addData" && <CompAddData setAlert={setAlert} />}
            {alert.comp === "image" && <CompImage setAlert={setAlert} />}
        </Alert>
    );
};

const TopAutoNgTable = ({ searchParams, setSearchParams }) => {
    const interval = useSelector((state) => state.setting.interval);
    const {
        data: line1OptionManualTop5NgCause = [],
        isLoading: line1OptionManualTop5NgCauseLoading,
    } = useGetLine1OptionManualTop5NgCauseQuery(searchParams, {
        pollingInterval: interval,
    });
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th
                        className={`bg-[#E2F1FF] py-2 text-sm`}
                        order={false}
                    >
                        Model
                    </Table.Th>
                    <Table.Th
                        className={`bg-[#E2F1FF] py-2 text-sm`}
                        order={false}
                    >
                        NG Cause
                    </Table.Th>
                    <Table.Th
                        className={`bg-[#E2F1FF] py-2 text-sm`}
                        order={false}
                    >
                        Timestamp
                    </Table.Th>
                </Table.Tr>
            </Table.Thead>
            <tbody>
                {line1OptionManualTop5NgCause.map((item, i) => (
                    <Table.Tr key={i}>
                        <Table.Td className="whitespace-nowrap py-2 text-sm">
                            {`${
                                (item.model_suffix || "").split(".")?.[0] || "-"
                            }`}
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap py-2 text-sm">
                            {item.assy_mode == "NG"
                                ? "ASSY MODE"
                                : item.results
                                      ?.map((item) => item?.name)
                                      .join(", ") || "-"}
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap py-2 text-sm">
                            {item.time || "-"}
                        </Table.Td>
                    </Table.Tr>
                ))}
            </tbody>
        </Table>
    );
};

const TopManualNgTable = () => {
    const { data: topManualNg, isLoading: topManualNgLoading } =
        useLine1OptionManualTopManualNgQuery();
    if (topManualNgLoading) {
        return (
            <>
                <div className="">....</div>
            </>
        );
    }
    return (
        <>
            <div className="flex flex-col gap-4">
                {topManualNg.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <ManualNgIcon />
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export const OptionManual = () => {
    const interval = useSelector((state) => state.setting.interval);
    const dispatch = useDispatch();
    const [ppmOn, setPpmOn] = useState(false);
    const manualNgOn = useSelector((state) => state.line1OptionManual.manualNgOn);
    const setManualNgOn = (e) => {
        dispatch(line1OptionManualSetManualNg(!manualNgOn));
    };
    const [_searchParams, _setSearchParams] = useSearchParams();
    const [searchParams, setSearchParams] = useState({
        ...(_searchParams.get("frequent")
            ? { frequent: _searchParams.get("frequent") }
            : { frequent: "hourly" }),
        ...(_searchParams.get("from_date")
            ? { from_date: _searchParams.get("from_date") }
            : {}),
        ...(_searchParams.get("to_date")
            ? { to_date: _searchParams.get("to_date") }
            : {}),
    });
    const [frequent, setFrequent] = useState("hourly");
    const {
        data: line1OptionManualCount = {},
        isLoading: line1OptionManualCountLoading,
    } = useGetLine1OptionManualCountQuery(searchParams, {
        pollingInterval: interval,
    });
    const {
        data: line1OptionManualTopTenLogs = [],
        isLoading: line1OptionManualTopTenLogsLoading,
    } = useGetLine1OptionManualTopTenLogsQuery(null, {
        pollingInterval: interval,
    });
    const [syncMutation, { isLoading: syncMutationLoading }] =
        useLine1OptionManualSyncMutation();
    const [alert, setAlert] = useState();
    const viewImage = (e, image) => {
        e.preventDefault();
        dispatch(line1OptionManualSetSelectedLogImage(image));
        setAlert({ comp: "image", bool: true });
    };
    const [syncForm, setSyncForm] = useState({
        base_path: "",
    });
    const submitSync = (e) => {
        e.preventDefault();
        syncMutation(syncForm);
    };

    useEffect(() => {
        _setSearchParams(searchParams, { replace: true });
    }, [searchParams]);
    const [ngRate, setNgRate] = useState(0);

    return (
        <>
            {alert && <OpenAlert alert={alert} setAlert={setAlert} />}
            <div className="relative h-full p-6 flex font-inter flex-col gap-4 bg-white">
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
                        <span className="font-semibold text-sm text-[#514E4E]">
                            OPTION MANUAL
                        </span>
                    </div>
                    <div className="text-lg font-semibold text-black">
                        MODEL RUNNING :{" "}
                        <span className="rounded px-4 py-2 border">
                            {line1OptionManualTopTenLogs?.[0]?.model}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-2 mb-3">
                        <form
                            className="flex gap-2 flex-1"
                            onSubmit={submitSync}
                        >
                            {/* <Input type="date" /> */}
                            <Input
                                type="text"
                                placeholder="OptionManual file directory"
                                required
                                value={syncForm.path}
                                className={`w-full`}
                                onChange={(e) =>
                                    setSyncForm((old) => ({
                                        ...old,
                                        base_path: e.target.value,
                                    }))
                                }
                            />
                            <button className="flex items-center text-white gap-3 rounded-lg bg-info px-4 py-3">
                                <SyncIcon />
                                Sync
                            </button>
                        </form>
                    </div>
                    <Card>
                        <div className="flex flex-col flex-1 gap-1">
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg">
                                    OptionManual
                                </span>
                                <div className="flex items-center gap-2">
                                    <div
                                        onClick={() =>
                                            setSearchParams((params) => ({
                                                frequent: "hourly",
                                            }))
                                        }
                                        className={`flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${
                                            searchParams.frequent == "hourly"
                                                ? "text-black border-[1px]"
                                                : "text-[#858383]"
                                        }`}
                                    >
                                        <span className="text-[11px] font-semibold">
                                            Hourly
                                        </span>
                                    </div>
                                    <div
                                        onClick={() =>
                                            setSearchParams((params) => ({
                                                frequent: "daily",
                                            }))
                                        }
                                        className={`flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${
                                            searchParams.frequent == "daily"
                                                ? "text-black border-[1px]"
                                                : "text-[#858383]"
                                        }`}
                                    >
                                        <span className="text-[11px] font-semibold">
                                            Daily
                                        </span>
                                    </div>
                                    <div
                                        onClick={() =>
                                            setSearchParams((params) => ({
                                                frequent: "monthly",
                                            }))
                                        }
                                        className={`flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${
                                            searchParams.frequent == "monthly"
                                                ? "text-black border-[1px]"
                                                : "text-[#858383]"
                                        }`}
                                    >
                                        <span className="text-[11px] font-semibold">
                                            Monthly
                                        </span>
                                    </div>
                                    <div
                                        onClick={() =>
                                            setSearchParams((params) => ({
                                                frequent: "annually",
                                            }))
                                        }
                                        className={`flex gap-1 items-center cursor-pointer w-[79px] h-[30px] justify-center rounded-sm ${
                                            searchParams.frequent == "annually"
                                                ? "text-black border-[1px]"
                                                : "text-[#858383]"
                                        }`}
                                    >
                                        <span className="text-[11px] font-semibold">
                                            Annual
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center gap-2 text-[#2E3032] text-sm">
                                        <span>NG Rate</span>
                                        <Switch
                                            as={`div`}
                                            checked={ppmOn}
                                            onChange={setPpmOn}
                                            className={`${
                                                ppmOn
                                                    ? "bg-blue-600"
                                                    : "bg-gray-200"
                                            } cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full`}
                                        >
                                            <span className="sr-only">
                                                Enable notifications
                                            </span>
                                            <span
                                                className={`${
                                                    ppmOn
                                                        ? "translate-x-6"
                                                        : "translate-x-1"
                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </Switch>
                                        <span>PPM</span>
                                    </div>
                                    <div className="rounded border px-2 py-1 min-w-[98px] flex justify-center items-center">
                                        <div className="text-xl font-semibold">
                                            {ngRate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <OptionManualChart
                                    ppmOn={ppmOn}
                                    searchParams={searchParams}
                                    setSearchParams={setSearchParams}
                                    ngRate={ngRate}
                                    setNgRate={setNgRate}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-3 flex gap-4 flex-col">
                        <div className="grid grid-cols-4 gap-4">
                            <Link
                                to={`log?judgement=ok&frequent=${searchParams.frequent}&start_date=${searchParams.from_date}&end_date=${searchParams.to_date}`}
                            >
                                <Card
                                    className={`py-[21px] px-[10px] cursor-pointer transition hover:shadow hover:-translate-y-1`}
                                >
                                    <span className="bg-[#B6E9D1] h-[32px] rounded-xl flex items-center justify-center text-[#084D2D] text-sm">
                                        Quantity OK
                                    </span>
                                    <span className="text-[#2D2A2A] m-auto text-[40px] font-bold">
                                        {line1OptionManualCount.ok || 0}
                                    </span>
                                </Card>
                            </Link>

                            <Link
                                to={`log?judgement=ng&frequent=${searchParams.frequent}&start_date=${searchParams.from_date}&end_date=${searchParams.to_date}`}
                            >
                                <Card
                                    className={`py-[21px] px-[10px] cursor-pointer transition hover:shadow hover:-translate-y-1`}
                                >
                                    <span className="bg-[#FAC5C1] h-[32px] rounded-xl flex items-center justify-center text-[#DE1B1B] text-sm">
                                        Quantity NG
                                    </span>
                                    <span className="text-[#2D2A2A] m-auto text-[40px] font-bold">
                                        {line1OptionManualCount.ng || 0}
                                    </span>
                                </Card>
                            </Link>
                        </div>
                        <div className="flex gap-3 flex-col border rounded-xl py-[19px] px-[24px]">
                            <div className="flex justify-between pb-1 items-center">
                                <span className="font-bold text-lg">Log</span>
                                <Link
                                    to={"log"}
                                    className="flex gap-1 items-center px-3 py-2 bg-[#229BD8] text-white rounded-md"
                                >
                                    <span className="text-[11px] font-semibold">
                                        See All
                                    </span>
                                    <HiOutlineChevronRight />
                                </Link>
                            </div>
                            <Table>
                                <Table.Thead className={`bg-[#D0D3D9]`}>
                                    <Table.Tr>
                                        <Table.Th
                                            className="whitespace-nowrap bg-red-[#D0D3D9] text-[#2D2A2A] text-xs"
                                            order={false}
                                        >
                                            Model
                                        </Table.Th>
                                        <Table.Th
                                            className="whitespace-nowrap bg-red-[#D0D3D9] text-[#2D2A2A] text-xs"
                                            order={false}
                                        >
                                            Serial Number
                                        </Table.Th>
                                        <Table.Th
                                            className="whitespace-nowrap bg-red-[#D0D3D9] text-[#2D2A2A] text-xs"
                                            order={false}
                                        >
                                            Judgement
                                        </Table.Th>
                                        <Table.Th
                                            className="whitespace-nowrap bg-red-[#D0D3D9] text-[#2D2A2A] text-xs"
                                            order={false}
                                        >
                                            NG Cause
                                        </Table.Th>
                                    </Table.Tr>
                                </Table.Thead>
                                <tbody>
                                    {line1OptionManualTopTenLogs.map(
                                        (item, i) => (
                                            <Table.Tr
                                                key={i}
                                                className={`even:bg-[#F0F1F3]`}
                                            >
                                                <Table.Td className="whitespace-nowrap py-1 border-b border-[#D0D3D9] bg-transparent">
                                                    {item.model_suffix.split(
                                                        "."
                                                    )?.[0] || "-"}
                                                </Table.Td>
                                                <Table.Td className="whitespace-nowrap py-1 border-b border-[#D0D3D9] bg-transparent">
                                                    {item.set_id || "-"}
                                                </Table.Td>
                                                <Table.Td className="whitespace-nowrap py-1 border-b border-[#D0D3D9] bg-transparent">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs ${
                                                            item.result == "OK"
                                                                ? "bg-[#B6E9D1] text-[#084D2D]"
                                                                : "bg-[#FAC5C1] text-[#F04438]"
                                                        }`}
                                                    >
                                                        {item.result == "OK"
                                                            ? "OK"
                                                            : "NO"}
                                                    </span>
                                                </Table.Td>
                                                <Table.Td className="whitespace-nowrap py-1 border-b border-[#D0D3D9] bg-transparent">
                                                    {item.results
                                                        ?.map(
                                                            (item) => item.name
                                                        )
                                                        ?.join(", ") || "-"}
                                                </Table.Td>
                                            </Table.Tr>
                                        )
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 px-6 py-7 border rounded-xl">
                        <div className="flex justify-between items-center pb-1">
                            <span className="font-bold text-lg">
                                {manualNgOn
                                    ? "Manual NG Cause"
                                    : "Trending NG Cause"}
                            </span>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2 text-[#2E3032] text-sm">
                                    <Switch
                                        as={`div`}
                                        checked={manualNgOn}
                                        onChange={setManualNgOn}
                                        className={`${
                                            manualNgOn
                                                ? "bg-blue-600"
                                                : "bg-gray-200"
                                        } cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full`}
                                    >
                                        <span className="sr-only">
                                            Enable notifications
                                        </span>
                                        <span
                                            className={`${
                                                manualNgOn
                                                    ? "translate-x-6"
                                                    : "translate-x-1"
                                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                        />
                                    </Switch>
                                    <span>Manual NG</span>
                                </div>
                                <button
                                    disabled={!manualNgOn}
                                    onClick={() =>
                                        setAlert({
                                            bool: true,
                                            comp: "addData",
                                        })
                                    }
                                    className="flex gap-1 cursor-pointer items-center px-3 py-2 bg-[#229BD8] text-white rounded-lg disabled:bg-gray-200 disabled:cursor-not-allowed"
                                >
                                    <HiOutlinePlusSm />
                                    <span className="text-[11px] font-semibold">
                                        Add Data
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            {manualNgOn ? (
                                <TopManualNgTable
                                    searchParams={searchParams}
                                    setSearchParams={setSearchParams}
                                />
                            ) : (
                                <TopAutoNgTable
                                    searchParams={searchParams}
                                    setSearchParams={setSearchParams}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {syncMutationLoading && (
                <>
                    <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-white/50 z-50">
                        <SyncIcon
                            width={120}
                            height={120}
                            fill="black"
                            className={`animate-spin`}
                        />
                    </div>
                </>
            )}
        </>
    );
};
