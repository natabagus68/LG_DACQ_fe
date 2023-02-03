export const IntervalOptionItem = ({
    active = false,
    label = "Update 1 minutes",
    ...props
}) => {
    return (
        <>
            <div
                className={`flex items-center gap-5 px-5 py-7 rounded border h-20 cursor-pointer hover:shadow ${
                    active
                        ? `border-[#72B3F8] bg-[#EAF4FE]`
                        : `border-[#EAEAEA] bg-white`
                }`}
                {...props}
            >
                <svg
                    width={18}
                    height={21}
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 19C7.14348 19 5.36301 18.2625 4.05025 16.9497C2.7375 15.637 2 13.8565 2 12C2 10.1435 2.7375 8.36301 4.05025 7.05025C5.36301 5.7375 7.14348 5 9 5C10.8565 5 12.637 5.7375 13.9497 7.05025C15.2625 8.36301 16 10.1435 16 12C16 13.8565 15.2625 15.637 13.9497 16.9497C12.637 18.2625 10.8565 19 9 19ZM16.03 6.39L17.45 4.97C17 4.46 16.55 4 16.04 3.56L14.62 5C13.07 3.74 11.12 3 9 3C6.61305 3 4.32387 3.94821 2.63604 5.63604C0.948211 7.32387 0 9.61305 0 12C0 14.3869 0.948211 16.6761 2.63604 18.364C4.32387 20.0518 6.61305 21 9 21C14 21 18 16.97 18 12C18 9.88 17.26 7.93 16.03 6.39ZM8 13H10V7H8V13ZM12 0H6V2H12V0Z"
                        fill={`${active ? "#194E86" : "#2D2A2A"}`}
                    />
                </svg>
                <span className="text-lg font-semibold">{label}</span>
                {active && (
                    <div className="ml-auto">
                        <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22 11L19.56 8.22004L19.9 4.54004L16.29 3.72004L14.4 0.540039L11 2.00004L7.6 0.540039L5.71 3.72004L2.1 4.53004L2.44 8.21004L0 11L2.44 13.78L2.1 17.47L5.71 18.29L7.6 21.47L11 20L14.4 21.46L16.29 18.28L19.9 17.46L19.56 13.78L22 11ZM9 16L5 12L6.41 10.59L9 13.17L15.59 6.58004L17 8.00004L9 16Z"
                                fill="#2064AD"
                            />
                        </svg>
                    </div>
                )}
            </div>
        </>
    );
};
