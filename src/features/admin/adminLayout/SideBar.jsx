import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavItem } from '../../../common/components';
import lg_electronics from '../../../assets/lg_electronics.png';
import { HiOutlineDesktopComputer, HiOutlineDocumentText, HiOutlineUsers, HiOutlineViewGrid, HiX } from "react-icons/hi";
import { TbActivity } from "react-icons/tb";
import { toggle } from './adminLayoutSlice';


export const SideBar = () => {
    const { navOpen } = useSelector(state => state.adminLayout);
    const dispatch = useDispatch();
    const [bar, setBar] = React.useState({
        dashboard: true,
        monitor: false,
        report: false,
        log: false,
        user: false
    })

    const setActive = (e) => {
        let bars = {
            dashboard: false,
            monitor: false,
            report: false,
            log: false,
            user: false
        }
        bars[e] = true
        setBar(bars)
    }

    return (
        <>
            <div className={`${navOpen ? 'block' : 'hidden'} flex absolute w-screen h-screen z-50`}>
                <div className={`left-0 bottom-0 z-50 flex flex-col bg-[#1B1A1A] w-[24vw] border-r-[1px] border-[#514E4E] h-full`}>
                    <div className='h-[5.5vw] w-full pl-[2vw] p-[1vw] flex items-center justify-between'>
                        <img src={lg_electronics} alt="LG" className='w-[12vw]' />
                        <HiX className='text-2xl cursor-pointer text-white hover:bg-[#343232] rounded-sm' onClick={() => dispatch(toggle())} />
                    </div>
                    <div className='flex-1 pl-[2vw] p-[1vw] flex flex-col gap-4'>
                        <div onClick={() => setActive('/')}>
                            <NavItem label={`Dashboard`} to={`dashboard`} isActive={bar.dashboard} icon={<HiOutlineViewGrid className='text-2xl' />}>
                            </NavItem>
                        </div>
                        <div onClick={() => setActive('monitor')}>
                            <NavItem label={`Monitor`} isActive={bar.monitor} icon={<HiOutlineDesktopComputer className='text-2xl' />}>
                                <NavItem to={`monitor/tilting`} label={`Tilting`} child={true} />
                                <NavItem to={`monitor/lifter`} label={`Lifter`} child={true} />
                            </NavItem>
                        </div>
                        <div onClick={() => setActive('report')}>
                            <NavItem label={`Report`} isActive={bar.report} icon={<HiOutlineDocumentText className='text-2xl' />}>
                                <NavItem to={`report`} label={`Production`} child={true} />
                                <NavItem to={``} label={`Servo Motor`} child={true} />
                            </NavItem>
                        </div>
                        <div onClick={() => setActive('log')}>
                            <NavItem label={`Log`} to={`log`} isActive={bar.log} icon={<TbActivity className='text-2xl' />}>
                            </NavItem>
                        </div>
                        <div onClick={() => setActive('user')}>
                            <NavItem label={`User`} isActive={bar.user} icon={<HiOutlineUsers className='text-2xl' />}>
                                <NavItem to={`account`} label={`Account`} child={true} />
                                <NavItem to={`access`} label={`Access`} child={true} />
                            </NavItem>
                        </div>
                    </div>
                </div>
                <div className='bg-[#000] bg-opacity-50 flex-1 cursor-pointer' onClick={() => dispatch(toggle())} />
            </div>
        </>
    );
};
