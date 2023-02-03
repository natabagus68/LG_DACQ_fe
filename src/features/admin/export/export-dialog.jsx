import { useState } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../common/utils";

export const ExportDialog = forwardRef((props, ref) => {
    const [exportDialogIsShow, setExportDialogIsShow] = useState(false);
    const [exportParams, _setExportParams] = useState({
        time_frequent: "hourly",
        start_date: null,
        end_date: null,
    });
    const setExportParams = (name, value) => {
        _setExportParams((p) => ({ ...p, [name]: value }));
    };
    useImperativeHandle(ref, () => ({
        toogle: () => {
            setExportDialogIsShow((s) => !s);
        },
    }));
    return (
        exportDialogIsShow && (
            <>
                <div className="absolute flex justify-center items-center inset-0 w-screen h-screen">
                    <div
                        onClick={(e) => setExportDialogIsShow((s) => !s)}
                        className="absolute inset-0 w-screen h-screen bg-black opacity-[0.26] z-0"
                    ></div>
                    <div className="flex flex-col gap-4 rounded-xl bg-white px-6 py-6 z-10 text-[#2D2A2A] lg:min-w-[480px]">
                        <div className="flex items-center gap-5">
                            <svg
                                width={56}
                                height={56}
                                viewBox="0 0 56 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x={4}
                                    y={4}
                                    width={48}
                                    height={48}
                                    rx={24}
                                    fill="#B3E3F9"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M27.0028 28.0759C27.001 28.0508 27 28.0255 27 28V20C27 19.448 27.447 19 28 19C28.553 19 29 19.448 29 20V27.9998L31.4 26.2C31.842 25.867 32.469 25.958 32.8 26.4C33.132 26.842 33.042 27.469 32.6 27.8L28.6 30.8C28.423 30.933 28.211 31 28 31C27.799 31 27.598 30.939 27.425 30.818L23.425 28.004C22.973 27.686 22.864 27.062 23.182 26.611C23.5 26.159 24.123 26.05 24.575 26.368L27.0028 28.0759ZM22 33V34H34V33C34 32.45 34.45 32 35 32C35.55 32 36 32.45 36 33V35C36 35.55 35.55 36 35 36H21C20.45 36 20 35.55 20 35V33C20 32.45 20.45 32 21 32C21.55 32 22 32.45 22 33Z"
                                    fill="#229BD8"
                                />
                                <rect
                                    x={4}
                                    y={4}
                                    width={48}
                                    height={48}
                                    rx={24}
                                    stroke="#E7F6FD"
                                    strokeWidth={8}
                                />
                            </svg>
                            <span className="text-xl font-semibold">
                                Export Excel file
                            </span>
                        </div>
                        <span className="font-semibold">Select Time</span>
                        <div className="grid grid-cols-4 flex-1 gap-2">
                            <div
                                onClick={(e) =>
                                    setExportParams("time_frequent", "hourly")
                                }
                                className={`rounded border px-3 py-3 text-center hover:shadow hover:border-blue-400 cursor-pointer ${
                                    exportParams.time_frequent == "hourly"
                                        ? "border-[#229BD8] font-semibold"
                                        : ""
                                }`}
                            >
                                Hourly
                            </div>
                            <div
                                onClick={(e) =>
                                    setExportParams("time_frequent", "daily")
                                }
                                className={`rounded border px-3 py-3 text-center hover:shadow hover:border-blue-400 cursor-pointer ${
                                    exportParams.time_frequent == "daily"
                                        ? "border-[#229BD8] font-semibold"
                                        : ""
                                }`}
                            >
                                Daily
                            </div>
                            <div
                                onClick={(e) =>
                                    setExportParams("time_frequent", "monthly")
                                }
                                className={`rounded border px-3 py-3 text-center hover:shadow hover:border-blue-400 cursor-pointer ${
                                    exportParams.time_frequent == "monthly"
                                        ? "border-[#229BD8] font-semibold"
                                        : ""
                                }`}
                            >
                                Monthly
                            </div>
                            <div
                                onClick={(e) =>
                                    setExportParams("time_frequent", "annualy")
                                }
                                className={`rounded border px-3 py-3 text-center hover:shadow hover:border-blue-400 cursor-pointer ${
                                    exportParams.time_frequent == "annualy"
                                        ? "border-[#229BD8] font-semibold"
                                        : ""
                                }`}
                            >
                                Annualy
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#737476]">Start</span>
                            <input
                                type="datetime-local"
                                name="start_date"
                                id="start_date_input"
                                className="px-1 py-2 border rounded w-full"
                                onChange={(e) =>
                                    setExportParams(
                                        "start_date",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[#737476]">End</span>
                            <input
                                type="datetime-local"
                                name="end_date"
                                id="end_date_input"
                                className="px-1 py-2 border rounded w-full"
                                onChange={(e) =>
                                    setExportParams("end_date", e.target.value)
                                }
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="rounded-lg border h-[44px]">
                                Cancel
                            </button>
                            <Link
                                to={`${config.pathPrefix}export-preview`}
                                state={exportParams}
                                className="flex items-center justify-center rounded-lg border h-[44px] bg-[#229BD8] text-white"
                            >
                                Preview
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    );
});
