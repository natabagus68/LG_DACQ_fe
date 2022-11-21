
import React from 'react';
import { NavLink } from 'react-router-dom';
import motor from '../../../assets/motor.png';

export const MotorInfo = ({number = 0, motorNum = 0, stf = "STF", er = 'ER', re = 'RE', lamp1 = 'off', lamp2 = 'off', top = '0%', left = '0%', ...props}) => {
    const color = {
        on: 'bg-[#74B816]',
        off: 'bg-[#737476]',
        danger: 'bg-[#DE1B1B]'
    }
    return (
        <>
            <NavLink to={ 'motor' } className={`flex flex-col  items-center justify-center absolute ${top} ${left} bg-black bg-opacity-80 text-[#00DCDC]`}>
                <div className='absolute top-[0%] right-[-4.3vw] w-[4vw] h-[3vh] rounded-[0.4vw] text-[0.7vw] bg-[#229BD8] text-white flex items-center justify-center'>Motor {motorNum}</div>
                <div className='w-[37%] h-[13%] bg-black absolute top-[11%] left-[32%] text-[0.5vw] text-center'>{number}</div>
                <img src={motor} alt='Motor' className='w-[2.2vw]' />
                <span className='text-[0.7vw]'>STF:{stf}</span>
                <span className='text-[0.7vw]'>ER:{er}</span>
                <span className='text-[0.7vw]'>RE:{re}</span>
                <div className='flex gap-[0.2vw]'>
                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] ${color[lamp1]}`}></div>
                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] ${color[lamp2]}`}></div>
                </div>
            </NavLink>
        </>
    );
};
