import React from "react";

export const EditIcon = ({ width = 19, height = 19, ...props }) => {
    return (
        <>
            <svg
                width={width}
                height={height}
                {...props}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.5715 15.5238H16.4286M13.0001 2.95239C13.3032 2.64929 13.7143 2.479 14.1429 2.479C14.3552 2.479 14.5653 2.52081 14.7614 2.60203C14.9575 2.68326 15.1357 2.80231 15.2858 2.95239C15.4359 3.10247 15.5549 3.28065 15.6361 3.47674C15.7174 3.67283 15.7592 3.883 15.7592 4.09525C15.7592 4.3075 15.7174 4.51767 15.6361 4.71376C15.5549 4.90985 15.4359 5.08802 15.2858 5.23811L5.76197 14.7619L2.71436 15.5238L3.47626 12.4762L13.0001 2.95239Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
