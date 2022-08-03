import React from "react";
import { useState } from "react";

export default function Switch({
    width = 32,
    height = 20,
    onClick = null,
    activeColor = "#617E8C",
    inactiveColor = "#A4A6A8",
    children = null,
    defaultValue = false
}) {
    const [active, setActive] = useState(defaultValue);

    const _onClick = (e) => {
        e.preventDefault();
        setActive((active) => !active);
        if (onClick) {
            onClick(e);
        }
    };
    return (
        <>
            <svg
                onClick={(e) => _onClick(e)}
                width={width}
                height={height}
                viewBox="0 0 32 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer group"
            >
                <rect
                    y={0}
                    width={32}
                    height={20}
                    rx={10}
                    fill={active ? activeColor : inactiveColor}
                />
                <g>
                    <circle
                        className={`transition-all ${active ? `group-hover:-translate-x-[1px]` : `group-hover:translate-x-[1px]`}`}
                        cx={active ? 22 : 10}
                        cy={10}
                        r={8}
                        fill="#F6F6F6"
                    />
                </g>
            </svg>
            {children && children({active, setActive})}
        </>
    );
}
