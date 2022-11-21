
import React from "react";

export const Card = ({ children, title = 'title' }) => {
    return(
        <>
            <div className="w-full h-full flex-col flex p-[24px] border-[1px] border-[#EAEAEA] rounded-lg">
                <span className=''>{title}</span>
                {children}
            </div>
        </>
    )
}