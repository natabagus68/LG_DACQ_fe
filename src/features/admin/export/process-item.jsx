import { ChartLine } from "../../../common/components/ChartLine";

export const ProcessItem = ({
    label = "",
    ngRate = "",
    judgements = [],
    topModelNg = null,
    chartData = [],
}) => {
    return (
        <>
            <div className="inline-block h-auto rounded-xl border p-3 mr-2 mb-2 page-break-inside-avoid min-w-[300px] min-h-[350px]">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 justify-between">
                        <div className="text-base font-semibold">{label}</div>
                        <div className="flex items-center gap-1">
                            <span className="text-[8px]">NG RATE</span>
                            <span className="text-[12px]">{ngRate}</span>
                        </div>
                    </div>
                    <div className="relative w-full h-28 border">
                        <div className="absolute flex items-center top-1 right-1 gap-1 text-[8px]">
                            <svg
                                width={6}
                                height={6}
                                viewBox="0 0 6 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx={3} cy={3} r={3} fill="#0BA5EC" />
                            </svg>
                            NG Rate
                        </div>
                        <ChartLine
                            datas={chartData.map((item) => item.y)}
                            labels={chartData.map((item) => item.x)}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {judgements.map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col min-w-[60px] border rounded-lg py-2 px-1 items-center text-[10px]"
                            >
                                <span className="text-[#858383]">
                                    {item.name}
                                </span>
                                <span>{item.value}</span>
                            </div>
                        ))}
                    </div>
                    {topModelNg && (
                        <>
                            <span className="text-[10px]">Top Model NG</span>
                            <div className="grid grid-cols-2 rounded-xl border">
                                <div className="flex flex-col items-center border-r px-1">
                                    <div className="text-[12px] text-[#12B76A]">
                                        {topModelNg.model}
                                    </div>
                                    <div className="text-[10px] text-[#858383]">
                                        Model Name
                                    </div>
                                </div>
                                <div className="flex flex-col items-center px-1">
                                    <div className="text-[12px] text-[#F04438]">
                                        {topModelNg.ngCause}
                                    </div>
                                    <div className="text-[10px] text-[#858383]">
                                        NG Summary
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    <span className="text-[10px]">Description</span>
                    <div
                        className="rounded-xl border px-2 py-1 text-[10px] h-full flex-1"
                        contentEditable
                    />
                </div>
            </div>
        </>
    );
};
