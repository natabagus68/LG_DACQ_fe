import React from 'react'
import warning_icon from '../../../src/assets/warning.png';
import validation_icon from '../../../src/assets/validation.png';
import delete_icon from '../../../src/assets/delete.png';
import success_icon from '../../../src/assets/success.png';

export const Alert = ({title = 'Title', info = null, icon = 'validation', ...props}) => {

  return (
    // WARNING!!!
    // Sequence 2 (Pusher Process) Sensor X162 NG (CHECK!!!)
    <>
        <div className="fixed w-screen h-screen z-50 bg-black bg-opacity-50 top-0 left-0 flex items-center justify-center">
          <div className='w-[599.33px] h-[403px] bg-white rounded-[12.92px] flex flex-col overflow-hidden'>
            <div className='flex-1 flex items-center justify-center flex-col'>
              {icon === 'warning' && <img src={warning_icon} alt='Alert' className='w-[130px] h-[130px]' />}
              {icon === 'validation' && <img src={validation_icon} alt='Alert' className='w-[130px] h-[130px]' />}
              {icon === 'delete' && <img src={delete_icon} alt='Alert' className='w-[130px] h-[130px]' />}
              {icon === 'success' && <img src={success_icon} alt='Alert' className='w-[130px] h-[130px]' />}
              <span className='text-[29.28px] mt-[28px] font-semibold'>{title}</span>
              {info && <span className='text-[17.22px] w-[235px] text-center text-[#777C82]'>{info}</span>}
            </div>
            <div className='h-[62px] bg-[#F04438] flex items-center justify-center text-white text-[20.67px] font-medium'>Close</div>
          </div>
        </div>
    </>
  )
}
