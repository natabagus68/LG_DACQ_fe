import React from 'react';
import { useSelector } from 'react-redux';
import { NavItem, NavLabel } from '../../../common/components';
import { DashboardIcon, MonitorIcon, ReportIcon, LogIcon, UsersIcon, SettingsIcon } from '../../../common/components/icons';
import lg_electronics from '../../../assets/lg_electronics.png'

export const SideBar = () => {
    const { navOpen } = useSelector(state => state.adminLayout);
    const [bar, setBar] = React.useState({
        dashboard: true,
        report: false,
        log: false,
        user: false
    })

    const toggle = (e) => {
        let bars = {
            dashboard: false,
            report: false,
            log: false,
            user: false
        }
        bars[e] = true
        setBar(bars)
    }

    return (
        <>
            {/* <div className={ `${navOpen == null && `w-0 pl-0 md:w-[274px] md:pl-8 md:pr-4`} ${navOpen == true ? `w-[274px] pl-[32px]` : `w-0 pl-0`} fixed top-[78px] left-0 overflow-x-hidden overflow-y-auto transition-[width_padding] flex flex-col gap-4 bg-[#1E1E1E] border-white border-r-[1px] py-[48px] h-full min-h-[calc(100vh_-_78px)]` }>
                <NavItem label={ `Dashboard` } icon={ <DashboardIcon /> }>
                </NavItem>
                <NavItem label={ `Monitoring` } icon={ <MonitorIcon /> }>
                </NavItem>
                <NavItem label={ `Report` } icon={ <ReportIcon /> }>
                    <NavItem to={ `accounts` } label={ `Production` } />
                    <NavItem to={ `` } label={ `Servo Motor` } />
                </NavItem>
                <NavItem label={ `Log` } icon={ <LogIcon /> }>
                </NavItem>
                <NavItem label={ `User` } icon={ <UsersIcon /> }>
                    <NavItem to={ `` } label={ `Account` } />
                    <NavItem to={ `` } label={ `Access` } />
                </NavItem>
                <NavItem label={ `Settings` } icon={ <SettingsIcon /> }>
                </NavItem>
            </div> */}

            <div className="w-[20%] border-r-[1px] border-[#514E4E] h-full pl-[2vw] p-[1vw] space-y-[4vw]">
                <img src={lg_electronics} alt="LG" className='w-[12vw]' />
                <div className="flex flex-col gap-[0.4vw]">
                    <div onClick={() => toggle('dashboard')}>
                        <NavItem label={ `Dashboard` } to={ `dashboard` } isActive={bar.dashboard} icon={ <DashboardIcon /> }>
                        </NavItem>
                    </div>
                    <div onClick={() => toggle('report')}>
                        <NavItem label={ `Report` } isActive={bar.report} icon={ <ReportIcon /> }>
                            <NavItem to={ `report` } label={ `Production` } child={true} />
                            <NavItem to={ `` } label={ `Servo Motor` } child={true} />
                        </NavItem>
                    </div>
                    <div onClick={() => toggle('log')}>
                        <NavItem label={ `Log` } to={ `log` } isActive={bar.log} icon={ <LogIcon /> }>
                        </NavItem>
                    </div>
                    <div onClick={() => toggle('user')}>
                        <NavItem label={ `User` } isActive={bar.user} icon={ <UsersIcon /> }>
                            <NavItem to={ `account` } label={ `Account` } child={true} />
                            <NavItem to={ `access` } label={ `Access` } child={true} />
                        </NavItem>
                    </div>
                    <div onClick={() => null}>
                        <NavItem label={ `Setting` } to={ `` } icon={ <SettingsIcon /> }>
                        </NavItem>
                    </div>
                    {/* <div onClick={() => navigate('/')} className={`${props.title === 'dashboard'? 'bg-[#383E49]':'bg-transparent'} h-[38px] rounded-[6px] text-[#A4A6A8] flex items-center px-[13px] space-x-[9px] hover:bg-[#383E49] cursor-pointer`}>
                        <IHero.HiOutlineViewGrid className="w-[18px] h-[18px]" />
                        <span className="text-sm font-inter font-medium">Dashboard</span>
                    </div>
                    <div onClick={() => navigate('/monitoring')} className={`${props.title === 'monitoring'? 'bg-[#383E49]':'bg-transparent'} h-[38px] rounded-[6px] text-[#A4A6A8] flex items-center px-[13px] space-x-[9px] hover:bg-[#383E49] cursor-pointer`}>
                        <IHero.HiOutlineDesktopComputer className="w-[18px] h-[18px]" />
                        <span className="text-sm font-inter font-medium">Monitoring</span>
                    </div>
                    <div onClick={() => navigate('/report')} className={`${props.title === 'report'? 'bg-[#383E49]':'bg-transparent'} h-[38px] rounded-[6px] text-[#A4A6A8] flex items-center px-[13px] justify-between hover:bg-[#383E49] cursor-pointer`}>
                        <div className="flex gap-[9px]">
                        <IHero.HiOutlineDocumentText className="w-[18px] h-[18px]" />
                        <span className="text-sm font-inter font-medium">Report</span>
                        </div>
                        <IHero.HiOutlineChevronRight className="w-[18px] h-[18px]" />
                    </div>
                    <div onClick={() => navigate('/log')} className={`${props.title === 'log'? 'bg-[#383E49]':'bg-transparent'} h-[38px] rounded-[6px] text-[#A4A6A8] flex items-center px-[13px] space-x-[9px] hover:bg-[#383E49] cursor-pointer`}>
                        <TbActivity className="w-[18px] h-[18px]" />
                        <span className="text-sm font-inter font-medium">Log</span>
                    </div>
                    <div onClick={() => navigate('/user')} className={`${props.title === 'user'? 'bg-[#383E49]':'bg-transparent'} h-[38px] rounded-[6px] text-[#A4A6A8] flex items-center px-[13px] justify-between hover:bg-[#383E49] cursor-pointer`}>
                        <div className="flex gap-[9px]">
                        <IHero.HiOutlineUsers className="w-[18px] h-[18px]" />
                        <span className="text-sm font-inter font-medium">User</span>
                        </div>
                        <IHero.HiOutlineChevronRight className="w-[18px] h-[18px]" />
                    </div>
                    <div onClick={() => navigate('/settings')} className={`${props.title === 'settings'? 'bg-[#383E49]':'bg-transparent'} h-[38px] rounded-[6px] text-[#A4A6A8] flex items-center px-[13px] space-x-[9px] hover:bg-[#383E49] cursor-pointer`}>
                        <IHero.HiOutlineCog className="w-[18px] h-[18px]" />
                        <span className="text-sm font-inter font-medium">Settings</span>
                    </div> */}
                </div>
            </div>
        </>
    );
};
