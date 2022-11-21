import React, { useEffect } from 'react';
import machine from '../../../assets/machine.png'
import { HomeIcon } from '../../../common/components/icons';
import { ButtonInfo } from './ButtonInfo'
import { MotorInfo } from './MotorInfo'
import push_unit from '../../../assets/push_unit.png';
import button from '../../../assets/button.png';
import button2 from '../../../assets/button2.png';
import motor from '../../../assets/motor.png';
import tilting from '../../../assets/tilting.png';
import damper from '../../../assets/damper.png';
import { Alert } from '../../../common/components';
import { NavLink } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <>
            <div className='relative h-full p-[2%] flex flex-col gap-5'>
                {/* <Alert title='WARNING!!!' info='Sequence 2 (Pusher Process) Sensor X162 NG (CHECK!!!)' icon='warning' /> */}
                <div className="absolute text-[#514E4E] flex items-center gap-[0.3vw] font-inter h-[5%]">
                    <HomeIcon />
                    <span className=' text-[1vw]'>/</span>
                    <span className="font-semibold text-[1vw] text-[#A9A8A8]">Dashboard</span>
                </div>
                <div className='relative flex-1 flex justify-center items-center'>
                    <img src={machine} alt="Machine" className='absolute w-[100%]' />
                </div>
                <span className='font-normal text-[0.8vw] text-white absolute top-[49.5%] left-[68%]'>DOOR</span>
                <span className='font-normal text-[0.8vw] text-white absolute top-[24.4%] left-[68%]'>DOOR</span>

                {/* X602 */}
                <ButtonInfo title='X602' command='PUSH FOR' lamp1={'off'} lamp2={'danger'} top='top-[30%]' left='left-[15%]' />
                {/* X036 */}
                <ButtonInfo title='X036' command='STOP' lamp1={'off'} lamp2={'danger'} top='top-[68%]' left='left-[5.7%]' />
                {/* X096 */}
                <ButtonInfo title='X096' command='C/V IN' lamp1={'on'} lamp2={'off'} top='top-[68%]' left='left-[9.5%]' />
                {/* X601 */}
                <ButtonInfo title='X601' command='STOP' lamp1={'off'} lamp2={'danger'} top='top-[68%]' left='left-[14%]' />
                {/* X608 */}
                <ButtonInfo title='X608' command='CHK-32' lamp1={'on'} lamp2={'off'} top='top-[67.5%]' left='left-[25.5%]' />
                {/* X611 */}
                <ButtonInfo title='X611' command='CHK-50' lamp1={'on'} lamp2={'off'} top='top-[67.5%]' left='left-[29.5%]' />
                {/* X610 */}
                <ButtonInfo title='X610' command='CHK-40' lamp1={'on'} lamp2={'off'} top='top-[74.2%]' left='left-[27.5%]' />
                {/* X609 */}
                <ButtonInfo title='X609' command='STOP' lamp1={'off'} lamp2={'danger'} top='top-[74.2%]' left='left-[34%]' />
                {/* X618 */}
                <ButtonInfo title='X618' command='Tilting Po33 CHK1' lamp1={'on'} lamp2={'off'} top='top-[77.5%]' left='left-[43.5%]' />
                {/* X619 */}
                <ButtonInfo title='X619' command='Tilting Po3B CHK2' lamp1={'on'} lamp2={'off'} top='top-[77.5%]' left='left-[49.5%]' />
                {/* X60A */}
                <ButtonInfo title='X60A' command='CHK-1' lamp1={'on'} lamp2={'off'} top='top-[55.5%]' left='left-[53.3%]' icon = {true} />
                {/* X60B */}
                <ButtonInfo title='X60B' command='CHK-2' lamp1={'on'} lamp2={'off'} top='top-[55.5%]' left='left-[57.5%]' icon = {true} />
                {/* X60C */}
                <ButtonInfo title='X60C' command='CHK-3' lamp1={'on'} lamp2={'off'} top='top-[55.5%]' left='left-[63%]' icon = {true} />
                {/* X60D */}
                <ButtonInfo title='X60D' command='OVER' lamp1={'off'} lamp2={'danger'} top='top-[55.5%]' left='left-[67.5%]' icon = {true} />
                {/* X61B */}
                <ButtonInfo title='X61B' command='STOP' lamp1={'off'} lamp2={'danger'} top='top-[54.5%]' left='left-[75.5%]' />
                {/* X61D */}
                <ButtonInfo title='X61D' command='STOP' lamp1={'off'} lamp2={'danger'} top='top-[52.5%]' left='left-[79.5%]' />
                {/* X61E */}
                <ButtonInfo title='X61E' command='STOP' lamp1={'off'} lamp2={'danger'} top='top-[52.5%]' left='left-[84%]' />

                {/* MOTOR 01 */}
                <MotorInfo number='01' motorNum={1} stf="Y301" er='X307' re='Y30B' lamp1={'on'} lamp2={'off'} top='top-[5%]' left='left-[20%]' />
                {/* MOTOR 02 */}
                <MotorInfo number='03' motorNum={2} stf="Y321" er='X327' re='Y32B' lamp1={'on'} lamp2={'off'} top='top-[5%]' left='left-[40%]' />
                {/* MOTOR 03 */}
                <MotorInfo number='04' motorNum={3} stf="Y340" er='X347' re='Y34B' lamp1={'on'} lamp2={'off'} top='top-[7%]' left='left-[66%]' />
                {/* MOTOR 04 */}
                <NavLink  to={ 'motor' } className='w-[16.5%] h-[18.5%] absolute cursor-pointer bottom-[1%] border-[0.1vw] border-[#FF00FF] bg-black bg-opacity-80 flex text-[#00DCDC]'>
                    <div className='absolute top-[-33%] right-[0%] w-[4vw] h-[3vh] rounded-[0.4vw] text-[0.7vw] bg-[#229BD8] text-white flex items-center justify-center'>Motor 4</div>
                    <span className=' text-[0.8vw] text-white underline absolute top-[-14%] left-[25%]'>PUSH UNIT ZONE</span>
                    <div className='flex flex-col h-full w-[34%]'>
                        <div className='w-full h-[60.5%] px-[0.3vw] py-[0.1vw]'>
                            <div className='flex items-center gap-[0.2vw] justify-between'>
                                <span className='text-[0.7vw]'>X607</span>
                                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BACK</span>
                            </div>
                            <div className='flex items-center gap-[0.2vw] justify-between'>
                                <span className='text-[0.7vw]'>X643</span>
                                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BACK</span>
                            </div>
                            <div className='flex items-center gap-[0.2vw] justify-between'> 
                                <span className='text-[0.7vw]'>X642</span>
                                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>FOR</span>
                            </div>
                            <div className='flex items-center gap-[0.2vw] justify-between'>
                                <span className='text-[0.7vw]'>X606</span>
                                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>FOR</span>
                            </div>
                        </div>
                        <div className='w-full flex-1 px-[0.3vw] py-[0.1vw]'>
                            <div className='flex items-center gap-[0.2vw] justify-between'>
                                <span className='text-[0.7vw]'>X605</span>
                                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BACK</span>
                            </div>
                            <div className='flex items-center gap-[0.2vw] justify-between'>
                                <span className='text-[0.7vw]'>X604</span>
                                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BK-SL</span>
                            </div>
                            <div className='flex items-center gap-[0.2vw] justify-between'> 
                                <span className='text-[0.7vw]'>X603</span>
                                <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>FOR</span>
                            </div>
                        </div>
                    </div>
                    <div className='h-full flex flex-col pr-[0.2vw]'>
                        <div className='flex w-full h-[58%]'>
                            <div className='h-full pr-[0.2vw]'>
                                <img src={push_unit} alt='Push Unit' className='h-full' /> 
                            </div>
                            <div className='flex-1 flex flex-col px-[0.2vw]'>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                                </div>
                                <div className='flex-1 flex flex-col justify-evenly'>
                                    <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                        <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                        <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                                    </div>
                                    <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                        <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                        <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                    </div>
                                </div>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex gap-[0.1vw]'>
                            <div className='flex flex-col justify-center'>
                                <img src={button} alt='Button' className='w-[2.5vw]' />
                                <img src={button} alt='Button' className='w-[2.5vw]' />
                                <img src={button} alt='Button' className='w-[2.5vw]' />
                            </div>
                            <div className='flex-1 flex flex-col justify-evenly'>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                                </div>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                </div>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full flex-1 flex flex-col items-center'>
                        <div className='relative flex justify-center'>
                            <img src={motor} alt='Motor' className='w-[2.5vw]' />
                            <div className='w-[37%] h-[43%] bg-black absolute top-[40%] left-[32%] text-[0.5vw] text-center'>02</div>
                        </div>
                        <span className='text-[0.58vw]'>FX:Y520</span>
                        <span className='text-[0.58vw]'>RX:Y521</span>
                        <span className='text-[0.58vw]'>REY522</span>
                        <span className='text-[0.58vw]'>RM:Y523</span>
                        <span className='text-[0.58vw]'>RE:Y524</span>
                        <span className='text-[0.58vw]'>BK:Y548</span>
                        <span className='text-[0.58vw]'>ER:Y508</span>
                    </div>
                </NavLink>
                {/* TILTING ZONE */}
                <div className='gap-[1vw] p-[0.2vw] absolute left-[20%] bottom-[1%] border-[0.1vw] border-[#FF00FF] bg-black bg-opacity-80 flex text-[#00DCDC]'>
                    <span className=' text-[0.8vw] text-white underline absolute top-[-18%] left-[27%] w-[100%]'>TILTING ZONE</span>
                    <div className='flex gap-[0.3vw]'>
                        <div className={`flex flex-col h-fit items-center justify-center text-[#00DCDC]`}>
                            <img src={button2} alt='Button' className='w-[0.7vw]' />
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] w-full text-center'>RLS</span>
                            <span className='text-[0.7vw]'>X63E</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#74B816] w-full text-center'>Y542</span>
                            <div className='flex gap-[0.2vw] mt-[0.1vw]'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                        </div>
                        <div className={`flex flex-col h-fit items-center justify-center text-[#00DCDC]`}>
                            <img src={button2} alt='Button' className='w-[0.7vw]' />
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] w-full text-center'>RLS</span>
                            <span className='text-[0.7vw]'>X63E</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#74B816] w-full text-center'>Y542</span>
                            <div className='flex gap-[0.2vw] mt-[0.1vw]'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                            </div>
                        </div>
                        <div className={`flex flex-col h-fit items-center justify-center text-[#00DCDC]`}>
                            <img src={button2} alt='Button' className='w-[0.7vw]' />
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] w-full text-center'>RLS</span>
                            <span className='text-[0.7vw]'>X63E</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#74B816] w-full text-center'>Y542</span>
                            <div className='flex gap-[0.2vw] mt-[0.1vw]'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex text-[#00DCDC] flex-col items-center justify-around'>
                        <div className='flex flex-col items-center'>
                            <img src={tilting} alt='Button' className='w-[2.5vw]' />
                            <span className='text-[0.7vw]'>SM01</span>
                            <div className='flex gap-[0.2vw] mt-[0.1vw]'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                        </div>
                        <span className='text-[0.7vw]'>BK:Y549</span>
                    </div>
                </div>
                {/* LOWER DAMPER ZONE */}
                <div className='absolute p-[0.2vw] px-[0.5vw] gap-[0.5vw] right-[27%] bottom-[1%] border-[0.1vw] border-[#FF00FF] bg-black bg-opacity-80 flex text-[#00DCDC]'>
                    <span className=' text-[0.8vw] text-white underline absolute top-[-20%] w-[100%] left-[2%]'>LOWER DAMPER ZONE</span>
                    <div className='flex flex-col justify-between'>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X614</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>FOR</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X648</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>FOR</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'> 
                            <span className='text-[0.7vw]'>X649</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BACK</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X615</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BACK</span>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={push_unit} alt='Push Unit' className='pr-[0.2vw] h-[5.5vw]' />
                        <div className='flex-1 flex flex-col px-[0.2vw]'>
                            <div className='flex gap-[0.2vw] h-[16%] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex-1 flex flex-col justify-evenly'>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                </div>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                                </div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[16%] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* UPPER DAMPER ZONE */}
                <div className='absolute p-[0.2vw] gap-[0.5vw] right-[20%] bottom-[18.4%] border-[0.1vw] border-[#FF00FF] bg-black bg-opacity-80 flex text-[#00DCDC]'>
                    <span className=' text-[0.8vw] text-white underline absolute top-[-20%] w-[100%] left-[2%]'>UPPER DAMPER ZONE</span>
                    <div className='flex flex-col justify-between'>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X614</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>FOR</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X648</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>FOR</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'> 
                            <span className='text-[0.7vw]'>X649</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BACK</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X615</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>BACK</span>
                        </div>
                    </div>
                    <div className='flex pr-[0.2vw]'>
                            <img src={push_unit} alt='Push Unit' className='h-[5.5vw] pr-[0.2vw]' /> 
                        <div className='flex-1 flex flex-col px-[0.2vw]'>
                            <div className='flex gap-[0.2vw] h-[16%] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex-1 flex flex-col justify-evenly'>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                </div>
                                <div className='flex gap-[0.2vw] h-[25%] items-center'>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                    <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                                </div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[16%] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex pr-[0.2vw] gap-[0.4vw] items-center'>
                        <div className={`flex flex-col h-fit items-center justify-center text-[#00DCDC] gap-[0.2vw]`}>
                            <span className='text-[0.7vw]'>X646</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] w-full text-center'>BACK</span>
                            <div className='flex gap-[0.2vw] mt-[0.1vw]'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <img src={damper} alt='Button' className='w-[0.7vw]' />
                        </div>
                        <div className={`flex flex-col h-fit items-center justify-center text-[#00DCDC] gap-[0.2vw]`}>
                            <span className='text-[0.7vw]'>X647</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] w-full text-center'>BACK</span>
                            <div className='flex gap-[0.2vw] mt-[0.1vw]'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <img src={damper} alt='Button' className='w-[0.7vw]' />
                        </div>
                    </div>
                </div>
                {/* UPPER DAMPER ZONE / MOTOR 5 */}
                <NavLink  to={ 'motor' } className='w-[16.5%] p-[0.2vw] absolute right-[2%] bottom-[23.5%] border-[0.1vw] border-[#FF00FF] bg-black bg-opacity-80 flex text-[#00DCDC]'>
                    <span className=' text-[0.8vw] text-white absolute top-[-15%] underline left-[19%]'>UPPER DAMPER ZONE</span>
                    <div className='absolute top-[-38%] right-[0%] w-[4vw] h-[3vh] rounded-[0.4vw] text-[0.7vw] bg-[#229BD8] text-white flex items-center justify-center'>Motor 5</div>
                    <div className='flex flex-col h-full w-[34%]'>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X624</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>UPOV</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X625</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>60"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'> 
                            <span className='text-[0.7vw]'>X626</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>50"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X627</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>40"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X628</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>30"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'> 
                            <span className='text-[0.7vw]'>X62B</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>DNOV</span>
                        </div>
                    </div>
                    <div className='flex pl-[0.2vw] gap-[0.4vw]'>
                        <div className='flex flex-col justify-between flex-1'>
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                        </div>
                        <div className='flex-1 flex flex-col '>
                            <div className='flex gap-[0.2vw] h-[1.8vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[2.6vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[1.9vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[2.6vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[1.8vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[2.4vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full flex-1 flex flex-col items-center gap-[0.2vw]'>
                        <div className='relative flex justify-center'>
                            <img src={motor} alt='Motor' className='w-[2.5vw]' />
                            <div className='w-[37%] h-[43%] bg-black absolute top-[40%] left-[32%] text-[0.5vw] text-center'>11</div>
                        </div>
                        <span className='text-[0.58vw]'>FX:Y535</span>
                        <span className='text-[0.58vw]'>RX:Y539</span>
                        <span className='text-[0.58vw]'>ER:Y500</span>
                    </div>
                </NavLink>
                {/* LOWER DAMPER ZONE / MOTOR 6 */}
                <NavLink  to={ 'motor' } className='w-[16.5%] p-[0.2vw] absolute right-[2%] bottom-[1%] border-[0.1vw] border-[#FF00FF] bg-black bg-opacity-80 flex text-[#00DCDC]'>
                    <span className=' text-[0.8vw] text-white absolute top-[-16%] left-[19%] underline'>LOWER DAMPER ZONE</span>
                    <div className='absolute top-[-38%] right-[0%] w-[4vw] h-[3vh] rounded-[0.4vw] text-[0.7vw] bg-[#229BD8] flex text-white items-center justify-center'>Motor 6</div>
                    <div className='flex flex-col h-full w-[34%]'>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X634</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>UPOV</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X635</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>60"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'> 
                            <span className='text-[0.7vw]'>X636</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>50"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X637</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>40"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'>
                            <span className='text-[0.7vw]'>X638</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>30"</span>
                        </div>
                        <div className='flex items-center gap-[0.2vw] justify-between'> 
                            <span className='text-[0.7vw]'>X63B</span>
                            <span className='text-[0.5vw] border-[0.1vw] border-[#00DCDC] text-center'>DNOV</span>
                        </div>
                    </div>
                    <div className='flex pl-[0.2vw] gap-[0.4vw]'>
                        <div className='flex flex-col justify-between flex-1'>
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                            <img src={button} alt='Button' className='w-[2.5vw]' />
                        </div>
                        <div className='flex-1 flex flex-col '>
                            <div className='flex gap-[0.2vw] h-[1.8vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[2.6vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[1.9vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[2.6vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#DE1B1B]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[1.8vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                            <div className='flex gap-[0.2vw] h-[2.4vh] items-center'>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#74B816]`}></div>
                                <div className={`w-[1.1vw] h-[0.42vw] rounded-[1vw] bg-[#737476]`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full flex-1 flex flex-col items-center gap-[0.2vw]'>
                        <div className='relative flex justify-center'>
                            <img src={motor} alt='Motor' className='w-[2.5vw]' />
                            <div className='w-[37%] h-[43%] bg-black absolute top-[40%] left-[32%] text-[0.5vw] text-center'>12</div>
                        </div>
                        <span className='text-[0.58vw]'>FX:Y538</span>
                        <span className='text-[0.58vw]'>RX:Y539</span>
                        <span className='text-[0.58vw]'>ER:Y50E</span>
                    </div>
                </NavLink>
            </div>
        </>
    );
};
