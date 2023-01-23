import React, { useState } from "react";
import { HomeIcon } from "../../../common/components/icons";
import { Card } from "../../../common/components/Card";
import { Switch } from "@headlessui/react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { ChartLine } from "../../../common/components/ChartLine";
import { config } from "../../../common/utils";
import { useMemo } from "react";
import {
    useGetLine1AsisChartLastWeekQuery,
    useGetLine1AsisNgRatioQuery,
    useGetLine1AsisTopNgCauseQuery,
    useGetLine1AsisTopManualNgQuery,
} from "../../../app/services/asisService";
import {
    useGetLine1OnepoleTwopoleChartLastWeekQuery,
    useGetLine1NgRatioOnepoleTwopoleQuery,
    useLine1OnepoleTwopoleTopManualNgQuery,
} from "../../../app/services/onepoleTwopoleService";
import { useSelector } from "react-redux";
import {
    useGetLine1HipotChartLastWeekQuery,
    useGetLine1HipotNgRatioQuery,
    useGetLine1HipotTopNgCauseQuery,
    useLine1HipotTopManualNgQuery,
} from "../../../app/services/hipotService";
import {
    useGetLine1WhiteBalanceChartLastWeekQuery,
    useGetLine1WhiteBalanceNgRatioQuery,
    useGetLine1WhiteBalanceTopNgCauseQuery,
    useLine1WhiteBalanceTopManualNgQuery,
} from "../../../app/services/whiteBalanceService";
import {
    useGetLine1ShipmodeChartLastWeekQuery,
    useGetLine1ShipmodeNgRatioQuery,
    useGetLine1ShipmodeTopNgCauseQuery,
    useLine1ShipmodeTopManualNgQuery,
} from "../../../app/services/shipmodeService";
import {
    useGetLine1OptionAutoChartLastWeekQuery,
    useGetLine1OptionAutoNgRatioQuery,
    useGetLine1OptionAutoTopNgCauseQuery,
    useLine1OptionAutoTopManualNgQuery,
} from "../../../app/services/optionAutoService";
import {
    useGetLine1OptionManualChartLastWeekQuery,
    useGetLine1OptionManualNgRatioQuery,
    useGetLine1OptionManualTopNgCauseQuery,
    useLine1OptionManualTopManualNgQuery,
} from "../../../app/services/optionManualService";
import {
    useGetLine1DtvInspectionChartLastWeekQuery,
    useGetLine1DtvInspectionNgRatioQuery,
    useGetLine1DtvInspectionTopNgCauseQuery,
    useLine1DtvInspectionTopManualNgQuery,
} from "../../../app/services/dtvInspectionService";

export const Line1 = () => {
    const [ppmOn, setPpmOn] = useState(false);
    const asisManualNgOn = useSelector((state) => state.line1Asis.manualNgOn);
    const { data: line1AsisTopManualNg } = useGetLine1AsisTopManualNgQuery();
    const { data: line1AsisChartLastWeek = [] } =
        useGetLine1AsisChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const { data: line1AsisTopNgCause } = useGetLine1AsisTopNgCauseQuery(null, {
        pollingInterval: 10000,
    });
    const { data: line1AsisNgRatio, isLoading: line1AsisNgRatioLoading } =
        useGetLine1AsisNgRatioQuery(null, {
            pollingInterval: 10000,
        });
    const asisChartData = useMemo(() => {
        return {
            labels: line1AsisChartLastWeek.map((item) => item?.x || "-"),
            datas: line1AsisChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1AsisChartLastWeek, ppmOn]);
    const { data: line1OnepoleTwopoleChartLastWeek = [] } =
        useGetLine1OnepoleTwopoleChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const {
        data: line1OnepoleTwopoleNgRatio,
        isLoading: line1OnepoleTwopoleNgRatioLoading,
    } = useGetLine1NgRatioOnepoleTwopoleQuery(null, {
        pollingInterval: 10000,
    });
    const {
        data: line1OnepoleTwopoleTopManualNg,
        isLoading: line1OnepoleTwopoleTopManualNgLoading,
    } = useLine1OnepoleTwopoleTopManualNgQuery(null, {
        pollingInterval: 10000,
    });
    const onepoleTwopoleChartData = useMemo(() => {
        return {
            labels: line1OnepoleTwopoleChartLastWeek.map(
                (item) => item?.x || "-"
            ),
            datas: line1OnepoleTwopoleChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1OnepoleTwopoleChartLastWeek, ppmOn]);

    const hipotManualNgOn = useSelector((state) => state.line1Hipot.manualNgOn);
    const { data: line1HipotTopManualNg } = useLine1HipotTopManualNgQuery();
    const { data: line1HipotChartLastWeek = [] } =
        useGetLine1HipotChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const { data: line1HipotTopNgCause } = useGetLine1HipotTopNgCauseQuery(
        null,
        {
            pollingInterval: 10000,
        }
    );
    const { data: line1HipotNgRatio, isLoading: line1HipotNgRatioLoading } =
        useGetLine1HipotNgRatioQuery(null, {
            pollingInterval: 10000,
        });
    const hipotChartData = useMemo(() => {
        return {
            labels: line1HipotChartLastWeek.map((item) => item?.x || "-"),
            datas: line1HipotChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1HipotChartLastWeek, ppmOn]);

    const whiteBalanceManualNgOn = useSelector(
        (state) => state.line1WhiteBalance.manualNgOn
    );
    const { data: line1WhiteBalanceTopManualNg } =
        useLine1WhiteBalanceTopManualNgQuery();
    const { data: line1WhiteBalanceChartLastWeek = [] } =
        useGetLine1WhiteBalanceChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const { data: line1WhiteBalanceTopNgCause } =
        useGetLine1WhiteBalanceTopNgCauseQuery(null, {
            pollingInterval: 10000,
        });
    const {
        data: line1WhiteBalanceNgRatio,
        isLoading: line1WhiteBalanceNgRatioLoading,
    } = useGetLine1WhiteBalanceNgRatioQuery(null, {
        pollingInterval: 10000,
    });
    const whiteBalanceChartData = useMemo(() => {
        return {
            labels: line1WhiteBalanceChartLastWeek.map(
                (item) => item?.x || "-"
            ),
            datas: line1WhiteBalanceChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1WhiteBalanceChartLastWeek, ppmOn]);

    const shipmodeManualNgOn = useSelector(
        (state) => state.line1Shipmode.manualNgOn
    );
    const { data: line1ShipmodeTopManualNg } =
        useLine1ShipmodeTopManualNgQuery();
    const { data: line1ShipmodeChartLastWeek = [] } =
        useGetLine1ShipmodeChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const { data: line1ShipmodeTopNgCause } =
        useGetLine1ShipmodeTopNgCauseQuery(null, {
            pollingInterval: 10000,
        });
    const {
        data: line1ShipmodeNgRatio,
        isLoading: line1ShipmodeNgRatioLoading,
    } = useGetLine1ShipmodeNgRatioQuery(null, {
        pollingInterval: 10000,
    });
    const shipmodeChartData = useMemo(() => {
        return {
            labels: line1ShipmodeChartLastWeek.map((item) => item?.x || "-"),
            datas: line1ShipmodeChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1ShipmodeChartLastWeek, ppmOn]);
    const optionAutoManualNgOn = useSelector(
        (state) => state.line1OptionAuto.manualNgOn
    );
    const { data: line1OptionAutoTopManualNg } =
        useLine1OptionAutoTopManualNgQuery();
    const { data: line1OptionAutoChartLastWeek = [] } =
        useGetLine1OptionAutoChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const { data: line1OptionAutoTopNgCause } =
        useGetLine1OptionAutoTopNgCauseQuery(null, {
            pollingInterval: 10000,
        });
    const {
        data: line1OptionAutoNgRatio = null,
        isLoading: line1OptionAutoNgRatioLoading,
    } = useGetLine1OptionAutoNgRatioQuery(null, {
        pollingInterval: 10000,
    });
    const optionAutoChartData = useMemo(() => {
        return {
            labels: line1OptionAutoChartLastWeek.map((item) => item?.x || "-"),
            datas: line1OptionAutoChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1OptionAutoChartLastWeek, ppmOn]);
    const optionManualManualNgOn = useSelector(
        (state) => state.line1OptionManual.manualNgOn
    );
    const { data: line1OptionManualTopManualNg } =
        useLine1OptionManualTopManualNgQuery();
    const { data: line1OptionManualChartLastWeek = [] } =
        useGetLine1OptionManualChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const { data: line1OptionManualTopNgCause } =
        useGetLine1OptionManualTopNgCauseQuery(null, {
            pollingInterval: 10000,
        });
    const {
        data: line1OptionManualNgRatio = null,
        isLoading: line1OptionManualNgRatioLoading,
    } = useGetLine1OptionManualNgRatioQuery(null, {
        pollingInterval: 10000,
    });
    const optionManualChartData = useMemo(() => {
        return {
            labels: line1OptionManualChartLastWeek.map(
                (item) => item?.x || "-"
            ),
            datas: line1OptionManualChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1OptionManualChartLastWeek, ppmOn]);
    const dtvInspectionManualNgOn = useSelector(
        (state) => state.line1DtvInspection.manualNgOn
    );
    const { data: line1DtvInspectionTopManualNg } =
        useLine1DtvInspectionTopManualNgQuery();
    const { data: line1DtvInspectionChartLastWeek = [] } =
        useGetLine1DtvInspectionChartLastWeekQuery(null, {
            pollingInterval: 10000,
        });
    const { data: line1DtvInspectionTopNgCause } =
        useGetLine1DtvInspectionTopNgCauseQuery(null, {
            pollingInterval: 10000,
        });
    const {
        data: line1DtvInspectionNgRatio,
        isLoading: line1DtvInspectionNgRatioLoading,
    } = useGetLine1DtvInspectionNgRatioQuery(null, {
        pollingInterval: 10000,
    });
    const dtvInspectionChartData = useMemo(() => {
        return {
            labels: line1DtvInspectionChartLastWeek.map(
                (item) => item?.x || "-"
            ),
            datas: line1DtvInspectionChartLastWeek.map(
                (item) => (item?.y || 0) * (ppmOn ? 10000 : 1)
            ),
        };
    }, [line1DtvInspectionChartLastWeek, ppmOn]);
    return (
        <>
            <div className="h-full p-[2%] flex font-inter flex-col bg-white">
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
                        <span className="font-semibold text-sm text-[#514E4E]">
                            Line 1
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#2E3032] text-sm">
                        <span>NG Rate</span>
                        {/* <Switch togglePrimary /> */}
                        <Switch
                            as={`div`}
                            checked={ppmOn}
                            onChange={setPpmOn}
                            className={`${
                                ppmOn ? "bg-blue-600" : "bg-gray-200"
                            } cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only">
                                Enable notifications
                            </span>
                            <span
                                className={`${
                                    ppmOn ? "translate-x-6" : "translate-x-1"
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <span>PPM</span>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-6">
                    <div className="flex-1 grid lg:grid-cols-4 justify-between gap-6">
                        <div className="flex-1">
                            <Card
                                title="ASIS"
                                subTitle={
                                    line1AsisNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            line1AsisNgRatio?.toFixed(1) || "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={asisChartData.datas}
                                            labels={asisChartData.labels}
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <span className="text-[10px] text-[#514E4E] font-medium">
                                            NG Cause
                                        </span>
                                        {asisManualNgOn ? (
                                            <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                                <span className="text-[10px] text-[#514E4E] font-medium">
                                                    NG Cause
                                                </span>
                                                <span className="text-[10px] text-[#858383] font-medium">
                                                    {line1AsisTopManualNg?.[0]
                                                        ?.description || "-"}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-[1px] rounded-xl flex justify-between">
                                                <div className="flex flex-col justify-center items-center py-2 flex-1 border-r">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1AsisTopNgCause?.model ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        Model Name
                                                    </span>
                                                </div>
                                                <div className="flex flex-col justify-center items-center py-2 flex-1">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1AsisTopNgCause?.ng_cause ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        NG Summary
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`asis`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <Card
                                title="OnePole-TwoPole"
                                subTitle={
                                    line1OnepoleTwopoleNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            (
                                                line1OnepoleTwopoleNgRatio || 0
                                            )?.toFixed(1) || "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={
                                                onepoleTwopoleChartData.datas
                                            }
                                            labels={
                                                onepoleTwopoleChartData.labels
                                            }
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                            <span className="text-[10px] text-[#514E4E] font-medium">
                                                NG Cause
                                            </span>
                                            <span className="text-[10px] text-[#858383] font-medium">
                                                {line1OnepoleTwopoleTopManualNg?.[0]
                                                    ?.description || "-"}
                                            </span>
                                        </div>
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`onepole-twopole`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <Card
                                title="HIPOT"
                                subTitle={
                                    line1HipotNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            line1HipotNgRatio?.toFixed(1) || "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={hipotChartData.datas}
                                            labels={hipotChartData.labels}
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <span className="text-[10px] text-[#514E4E] font-medium">
                                            NG Cause
                                        </span>
                                        {hipotManualNgOn ? (
                                            <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                                <span className="text-[10px] text-[#514E4E] font-medium">
                                                    NG Cause
                                                </span>
                                                <span className="text-[10px] text-[#858383] font-medium">
                                                    {line1HipotTopManualNg?.[0]
                                                        ?.description || "-"}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-[1px] rounded-xl flex justify-between">
                                                <div className="flex flex-col justify-center items-center py-2 flex-1 border-r">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1HipotTopNgCause?.model ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        Model Name
                                                    </span>
                                                </div>
                                                <div className="flex flex-col justify-center items-center py-2 flex-1">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1HipotTopNgCause?.ng_cause ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        NG Summary
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`hipot`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <Card
                                title="OPTION AUTO"
                                subTitle={
                                    line1OptionAutoNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            line1OptionAutoNgRatio?.toFixed(
                                                1
                                            ) || "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={optionAutoChartData.datas}
                                            labels={optionAutoChartData.labels}
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <span className="text-[10px] text-[#514E4E] font-medium">
                                            NG Cause
                                        </span>
                                        {optionAutoManualNgOn ? (
                                            <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                                <span className="text-[10px] text-[#514E4E] font-medium">
                                                    NG Cause
                                                </span>
                                                <span className="text-[10px] text-[#858383] font-medium">
                                                    {line1OptionAutoTopManualNg?.[0]
                                                        ?.description || "-"}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-[1px] rounded-xl flex justify-between">
                                                <div className="flex flex-col justify-center items-center py-2 flex-1 border-r">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1OptionAutoTopNgCause?.model_suffix ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        Model Name
                                                    </span>
                                                </div>
                                                <div className="flex flex-col justify-center items-center py-2 flex-1">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1OptionAutoTopNgCause?.assy_mode !==
                                                        ""
                                                            ? "ASSY MODE"
                                                            : line1OptionAutoTopNgCause?.results
                                                                  .map(
                                                                      (item) =>
                                                                          item.name
                                                                  )
                                                                  .join(", ") ||
                                                              "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        NG Summary
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`option-auto`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <Card
                                title="OPTION MANUAL"
                                subTitle={
                                    line1OptionManualNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            line1OptionManualNgRatio?.toFixed(
                                                1
                                            ) || "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={optionManualChartData.datas}
                                            labels={
                                                optionManualChartData.labels
                                            }
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <span className="text-[10px] text-[#514E4E] font-medium">
                                            NG Cause
                                        </span>
                                        {optionManualManualNgOn ? (
                                            <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                                <span className="text-[10px] text-[#514E4E] font-medium">
                                                    NG Cause
                                                </span>
                                                <span className="text-[10px] text-[#858383] font-medium">
                                                    {line1OptionManualTopManualNg?.[0]
                                                        ?.description || "-"}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-[1px] rounded-xl flex justify-between">
                                                <div className="flex flex-col justify-center items-center py-2 flex-1 border-r">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1OptionManualTopNgCause?.model_suffix ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        Model Name
                                                    </span>
                                                </div>
                                                <div className="flex flex-col justify-center items-center py-2 flex-1">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1OptionManualTopNgCause?.assy_mode ==
                                                        "NG"
                                                            ? "ASSY MODE"
                                                            : line1OptionManualTopNgCause?.results
                                                                  ?.map(
                                                                      (item) =>
                                                                          item.name
                                                                  )
                                                                  ?.join("") ||
                                                              "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        NG Summary
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`option-manual`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <Card
                                title="DTV INSPECTION"
                                subTitle={
                                    line1DtvInspectionNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            line1DtvInspectionNgRatio?.toFixed(
                                                1
                                            ) || "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={dtvInspectionChartData.datas}
                                            labels={
                                                dtvInspectionChartData.labels
                                            }
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <span className="text-[10px] text-[#514E4E] font-medium">
                                            NG Cause
                                        </span>
                                        {dtvInspectionManualNgOn ? (
                                            <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                                <span className="text-[10px] text-[#514E4E] font-medium">
                                                    NG Cause
                                                </span>
                                                <span className="text-[10px] text-[#858383] font-medium">
                                                    {line1DtvInspectionTopManualNg?.[0]
                                                        ?.description || "-"}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-[1px] rounded-xl flex justify-between">
                                                <div className="flex flex-col justify-center items-center py-2 flex-1 border-r">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1DtvInspectionTopNgCause?.model ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        Model Name
                                                    </span>
                                                </div>
                                                <div className="flex flex-col justify-center items-center py-2 flex-1">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1DtvInspectionTopNgCause?.ng_cause ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        NG Summary
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`dtv-inspection`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <Card
                                title="WHITE BALANCE"
                                subTitle={
                                    line1OptionManualNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            line1OptionManualNgRatio?.toFixed(
                                                1
                                            ) || "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={optionManualChartData.datas}
                                            labels={
                                                optionManualChartData.labels
                                            }
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <span className="text-[10px] text-[#514E4E] font-medium">
                                            NG Cause
                                        </span>
                                        {optionManualManualNgOn ? (
                                            <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                                <span className="text-[10px] text-[#514E4E] font-medium">
                                                    NG Cause
                                                </span>
                                                <span className="text-[10px] text-[#858383] font-medium">
                                                    {line1OptionManualTopManualNg?.[0]
                                                        ?.description || "-"}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-[1px] rounded-xl flex justify-between">
                                                <div className="flex flex-col justify-center items-center py-2 flex-1 border-r">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1OptionManualTopNgCause?.model ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        Model Name
                                                    </span>
                                                </div>
                                                <div className="flex flex-col justify-center items-center py-2 flex-1">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1OptionManualTopNgCause?.ng_cause ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        NG Summary
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`white-balance`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <Card
                                title="SHIPMODE"
                                subTitle={
                                    line1ShipmodeNgRatioLoading ? (
                                        <>
                                            <div className="w-6 h-6 bg-gray-300 animate-pulse"></div>
                                        </>
                                    ) : (
                                        `${
                                            line1ShipmodeNgRatio?.toFixed(1) ||
                                            "-"
                                        }%`
                                    )
                                }
                            >
                                <div className="flex flex-col justify-between flex-1">
                                    <div className="flex gap-[14px] items-center flex-1">
                                        <ChartLine
                                            datas={optionManualChartData.datas}
                                            labels={
                                                optionManualChartData.labels
                                            }
                                            width={"100%"}
                                            height={"100%"}
                                        />
                                    </div>
                                    <div className="flex flex-col mt-5">
                                        <span className="text-[10px] text-[#514E4E] font-medium">
                                            NG Cause
                                        </span>
                                        {optionManualManualNgOn ? (
                                            <div className="border-[1px] rounded-xl flex flex-col justify-between p-2">
                                                <span className="text-[10px] text-[#514E4E] font-medium">
                                                    NG Cause
                                                </span>
                                                <span className="text-[10px] text-[#858383] font-medium">
                                                    {line1ShipmodeTopManualNg?.[0]
                                                        ?.description || "-"}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-[1px] rounded-xl flex justify-between">
                                                <div className="flex flex-col justify-center items-center py-2 flex-1 border-r">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1ShipmodeTopNgCause?.model ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        Model Name
                                                    </span>
                                                </div>
                                                <div className="flex flex-col justify-center items-center py-2 flex-1">
                                                    <span className="text-xs font-bold text-[#12B76A]">
                                                        {line1ShipmodeTopNgCause?.ng_cause ||
                                                            "-"}
                                                    </span>
                                                    <span className="text-[10px] text-[#858383] font-medium">
                                                        NG Summary
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-2">
                                            <NavLink
                                                to={`shipmode`}
                                                className="flex items-center gap-1 text-[#4E5BA6] text-xs font-medium"
                                            >
                                                <span>Details</span>
                                                <HiOutlineChevronRight />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
