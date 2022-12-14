

export const Card = ({ children, title = false, subTitle = false, ...props }) => {
    return(
        <>
            <div className={ `${props.className || ''} w-full h-full flex-col justify-between flex ${((props.className)?.includes('p-') || (props.className)?.includes('py-') || (props.className)?.includes('px-')) ? '' : 'p-4'} font-inter border-[1px] border-[#EAEAEA] rounded-xl` }>
                <div className="flex items-center justify-between">
                    {title && <span className='font-bold text-lg'>{title}</span>}
                    {subTitle && <span className="font-medium text-xs text-[#12B76A]">{subTitle}</span>}
                </div>
                {children}
            </div>
        </>
    )
}