
import React from 'react';
import button from '../../../assets/button.png';

export const ButtonInfo = ({title = "Title", command = "COMMAND", lamp1 = 'off', lamp2 = 'off', top = '0%', left = '0%', icon = false, ...props}) => {
    const color = {
        on: 'bg-[#74B816]',
        off: 'bg-[#737476]',
        danger: 'bg-[#DE1B1B]'
    }
    return (
        <>
            <div className={`flex flex-col  items-center justify-center absolute ${top} ${left} bg-black bg-opacity-80 text-[#00DCDC]`}>
                { icon && <img src={button} alt='Button' className='w-[1.6vw]' /> }
                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] w-full text-center'>{command}</span>
                <span className='text-[0.7vw]'>{title}</span>
                <div className='flex gap-[0.2vw]'>
                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] ${color[lamp1]}`}></div>
                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] ${color[lamp2]}`}></div>
                </div>
            </div>
        </>
    );
};
