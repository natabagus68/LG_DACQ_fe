import moment from "moment";
import { useMemo } from "react";
import { useRef, useState } from "react";
import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useReportQuery } from "../../../app/services/reportService";
import textLogo from "../../../assets/text-logo.png";
import { config } from "../../../common/utils";
import { ProcessItem } from "./process-item";

export const ExportPreview = () => {
    const { state } = useLocation();
    const toPrintDoc = useRef();
    const printDoc = useCallback(() => {
        // const printWindow = window.open("", "_blank", 1024, 800);
        // printWindow.document.head.innerHTML = document.head.innerHTML;
        // printWindow.document.body.innerHTML = toPrintDoc.current.outerHTML;
        // printWindow.print();
        // printWindow.close();
        window.print();
    }, []);
    const [title, setTitle] = useState(
        `Monthly Report Line 1 - ${moment(state.start_date).format('DD MMM YYYY HH:mm:ss')} - ${moment(state.end_date).format('DD MMM YYYY HH:mm:ss')}`
    );
    const { data: { data: report = [] } = {} } = useReportQuery(state);
    const mappedReport = useMemo(() => {
        let _report = {};
        report?.forEach((item) => {
            _report = {
                ..._report,
                [item.name]: item,
            };
        });
        return _report;
    }, [report]);
    return (
        <>
            {/* <div className="absolute flex gap-4 flex-col justify-start p-10 min-w-screen w-screen min-h-screen bg-gray-200"> */}
                <div
                    className="flex flex-col gap-7 bg-white px-9 py-7 print:px-0 print:py-0"
                    ref={toPrintDoc}
                >
                    <div className="flex items-center">
                        <img
                            src={`${window.location.protocol}//${window.location.host}${textLogo}`}
                            alt="NO IMAGE"
                            onError={(e) => console.log(e)}
                        />
                        <div
                            className="flex-1 text-lg font-semibold ml-12"
                            contentEditable
                            onChange={(e) => setTitle(e.target.innerText)}
                        >
                            {title}
                        </div>
                        <button
                            onClick={(e) => printDoc()}
                            className="flex items-center gap-2 ml-auto border rounded px-3 py-1 hover:shadow print:sr-only"
                        >
                            <svg
                                width={16}
                                height={14}
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.333 9.52758C13.333 9.74225 13.143 9.91667 12.9083 9.91667H12.333V8.75C12.333 8.10658 11.735 7.58333 10.9997 7.58333H4.99967C4.26434 7.58333 3.66634 8.10658 3.66634 8.75V9.91667H3.09101C2.85634 9.91667 2.66634 9.74225 2.66634 9.52758V5.63908C2.66634 5.42442 2.85634 5.25 3.09101 5.25H3.99967H5.33301H10.6663H11.9997H12.9083C13.143 5.25 13.333 5.42442 13.333 5.63908V9.52758ZM4.99967 11.0833V8.75H10.9997L11.001 11.0833H4.99967ZM5.34234 2.91667H10.6663V4.08333H5.33767L5.34234 2.91667ZM12.9083 4.08333H11.9997V2.91667C11.9997 2.27325 11.4517 1.75 10.7777 1.75H5.22167C4.54767 1.75 3.99967 2.27325 3.99967 2.91667V4.08333H3.09101C2.12167 4.08333 1.33301 4.781 1.33301 5.63908V9.52758C1.33301 10.3857 2.12167 11.0833 3.09101 11.0833H3.66634C3.66634 11.7267 4.26434 12.25 4.99967 12.25H10.9997C11.735 12.25 12.333 11.7267 12.333 11.0833H12.9083C13.8777 11.0833 14.6663 10.3857 14.6663 9.52758V5.63908C14.6663 4.781 13.8777 4.08333 12.9083 4.08333Z"
                                    fill="#514E4E"
                                />
                            </svg>
                            <span>Print</span>
                        </button>
                    </div>
                    <div className="block pl-2 pt-2">
                        {/* {JSON.stringify(mappedReport)} */}
                        <ProcessItem
                            label={mappedReport[`ASIS`]?.name}
                            chartData={mappedReport[`ASIS`]?.chartData}
                            ngRate={mappedReport[`ASIS`]?.ngRate}
                            judgements={mappedReport[`ASIS`]?.judgements}
                            topModelNg={{
                                model: mappedReport[`ASIS`]?.topModel,
                                ngCause: mappedReport[`ASIS`]?.topNgCause,
                            }}
                        />
                        <ProcessItem
                            label={mappedReport[`OnePole-TwoPole`]?.name}
                            chartData={mappedReport[`OnePole-TwoPole`]?.chartData}
                            ngRate={mappedReport[`OnePole-TwoPole`]?.ngRate}
                            judgements={
                                mappedReport[`OnePole-TwoPole`]?.judgements
                            }
                        />
                        <ProcessItem
                            label={mappedReport[`Hipot`]?.name}
                            chartData={mappedReport[`Hipot`]?.chartData}
                            ngRate={mappedReport[`Hipot`]?.ngRate}
                            judgements={mappedReport[`Hipot`]?.judgements}
                            topModelNg={{
                                model: mappedReport[`Hipot`]?.topModel,
                                ngCause: mappedReport[`Hipot`]?.topNgCause,
                            }}
                        />
                        <ProcessItem
                            label={mappedReport[`Option Manual`]?.name}
                            chartData={mappedReport[`Option Manual`]?.chartData}
                            ngRate={mappedReport[`Option Manual`]?.ngRate}
                            judgements={
                                mappedReport[`Option Manual`]?.judgements
                            }
                            topModelNg={{
                                model: mappedReport[`Option Manual`]?.topModel,
                                ngCause:
                                    mappedReport[`Option Manual`]?.topNgCause,
                            }}
                        />
                        <ProcessItem
                            label={mappedReport[`Option Auto`]?.name}
                            chartData={mappedReport[`Option Auto`]?.chartData}
                            ngRate={mappedReport[`Option Auto`]?.ngRate}
                            judgements={mappedReport[`Option Auto`]?.judgements}
                            topModelNg={{
                                model: mappedReport[`Option Auto`]?.topModel,
                                ngCause:
                                    mappedReport[`Option Auto`]?.topNgCause,
                            }}
                        />
                        <ProcessItem
                            label={mappedReport[`White Balance`]?.name}
                            chartData={mappedReport[`White Balance`]?.chartData}
                            ngRate={mappedReport[`White Balance`]?.ngRate}
                            judgements={
                                mappedReport[`White Balance`]?.judgements
                            }
                            topModelNg={{
                                model: mappedReport[`White Balance`]?.topModel,
                                ngCause:
                                    mappedReport[`White Balance`]?.topNgCause,
                            }}
                        />
                        <ProcessItem
                            label={mappedReport[`DTV Inspection`]?.name}
                            chartData={mappedReport[`DTV Inspection`]?.chartData}
                            ngRate={mappedReport[`DTV Inspection`]?.ngRate}
                            judgements={
                                mappedReport[`DTV Inspection`]?.judgements
                            }
                            topModelNg={{
                                model: mappedReport[`DTV Inspection`]?.topModel,
                                ngCause:
                                    mappedReport[`DTV Inspection`]?.topNgCause,
                            }}
                        />
                        <ProcessItem
                            label={mappedReport[`Shipmode`]?.name}
                            chartData={mappedReport[`Shipmode`]?.chartData}
                            ngRate={mappedReport[`Shipmode`]?.ngRate}
                            judgements={mappedReport[`Shipmode`]?.judgements}
                            topModelNg={{
                                model: mappedReport[`Shipmode`]?.topModel,
                                ngCause: mappedReport[`Shipmode`]?.topNgCause,
                            }}
                        />
                    </div>
                </div>
            {/* </div> */}
        </>
    );
};
