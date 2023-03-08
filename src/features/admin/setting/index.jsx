import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IntervalOptionItem } from "./interval-option-item";
import { setInterval } from "./setting-slice";

export const Setting = () => {
    const interval = useSelector((state) => state.setting.interval);
    const dispatch = useDispatch();
    const availableOptions = [
        1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
    ].map((item) => item);
    return (
        <>
            <div className="flex flex-1 flex-col h-full bg-white px-7 py-7">
                <div className="flex gap-2 items-center mb-4">
                    <Link to={`dashboard`}>
                        <svg
                            width={12}
                            height={14}
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.98372 0.33325C5.87711 0.336891 5.77445 0.374531 5.69076 0.440672L0.953125 4.17309C0.351826 4.64697 0 5.37109 0 6.13664V12.4999C0 12.9544 0.378802 13.3332 0.833333 13.3332H4.16667C4.6212 13.3332 5 12.9544 5 12.4999V9.16658C5 9.06823 5.06832 8.99992 5.16667 8.99992H6.83333C6.93168 8.99992 7 9.06823 7 9.16658V12.4999C7 12.9544 7.3788 13.3332 7.83333 13.3332H11.1667C11.6212 13.3332 12 12.9544 12 12.4999V6.13664C12 5.37109 11.6482 4.64697 11.0469 4.17309L6.30925 0.440672C6.21678 0.36763 6.1015 0.329586 5.98372 0.33325ZM6 1.46997L10.4284 4.9589C10.7898 5.24369 11 5.67685 11 6.13664V12.3332H8V9.16658C8 8.52826 7.47165 7.99992 6.83333 7.99992H5.16667C4.52835 7.99992 4 8.52826 4 9.16658V12.3332H1V6.13664C1 5.67685 1.21025 5.24369 1.57161 4.9589L6 1.46997Z"
                                fill="#A9A8A8"
                            />
                        </svg>
                    </Link>
                    <svg
                        width={5}
                        height={12}
                        viewBox="0 0 5 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.44 0.53L1.74 11.81H0.37L3.07 0.53H4.44Z"
                            fill="#A9A8A8"
                        />
                    </svg>
                    <div className="font-semibold">Settings</div>
                </div>
                <div className="flex flex-1 flex-col rounded-xl border">
                    <div className="flex items-center border-b px-6 py-2 bg-[#F7F9FA]">
                        <div className="text-xl font-semibold">
                            Interval Settings
                        </div>
                        <button className="flex gap-3 ml-auto items-center rounded px-3 py-1 bg-[#229BD8] text-white">
                            <svg
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.6667 11.1667H11.1667V10.6667V3.22V3.01289L11.0202 2.86645L9.13355 0.97978L8.98711 0.833333H8.78H1.33333H0.833333V1.33333V10.6667V11.1667H1.33333H10.6667ZM1.33333 0.5H9.12623L11.5 2.87377V10.6667C11.5 11.1239 11.1239 11.5 10.6667 11.5H1.33333C0.871102 11.5 0.5 11.1255 0.5 10.6667V1.33333C0.5 0.874513 0.871103 0.5 1.33333 0.5ZM4.5 8C4.5 7.16948 5.16948 6.5 6 6.5C6.83052 6.5 7.5 7.16948 7.5 8C7.5 8.83052 6.83052 9.5 6 9.5C5.16948 9.5 4.5 8.83052 4.5 8ZM2.5 2.5H7.5V4.16667H2.5V2.5Z"
                                    stroke="white"
                                />
                            </svg>
                            <span>Save</span>
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-x-10 gap-y-5 px-6 py-6">
                        {availableOptions.map((item, i) => (
                            <IntervalOptionItem
                                key={i}
                                active={interval == item}
                                label={`Update ${item / 1000 / 60} minutes`}
                                onClick={(e) => {
                                    dispatch(setInterval(item));
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
