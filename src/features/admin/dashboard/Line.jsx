
import { HiTrendingDown } from "react-icons/hi"
import { Link } from "react-router-dom";
import { Card } from "../../../common/components"

export const Line = ({ children, title = 'Title', value = undefined, detailPath = '', ...props }) => {
    return(
        <>
            <Card title={title}>
                <div className='flex flex-col justify-between flex-1 gap-3 mt-3'>
                    <div className='flex gap-[14px] items-center'>
                        <div className='w-[40px] h-[40px] bg-[#FCEAEA] rounded-full flex items-center justify-center'>
                            <HiTrendingDown className='w-6 text-[#DE1B1B]' />
                        </div>
                        <span className='font-medium flex gap-2'>NG Ratio : { value || <div className="h-7 w-7 bg-gray-300 rounded animate-pulse"></div> }</span>
                    </div>
                    <Link to={ detailPath } className='bg-[#14988B] flex items-center justify-center h-[44px] rounded text-white'>
                        View Details
                    </Link>
                </div>
            </Card>
        </>
    )
}