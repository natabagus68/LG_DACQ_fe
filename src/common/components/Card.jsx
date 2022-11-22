

export const Card = ({ children, title = false, subTitle = false, ...props }) => {
    return(
        <>
            <div className="w-full h-full flex-col flex p-[16px] font-inter border-[1px] border-[#EAEAEA] rounded-lg">
                <div className="flex items-center justify-between">
                    {title && <span className='font-bold text-lg'>{title}</span>}
                    {subTitle && <span className="font-medium text-xs text-[#12B76A]">{subTitle}</span>}
                </div>
                {children}
            </div>
        </>
    )
}