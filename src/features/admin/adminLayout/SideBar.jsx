import React from 'react';
import { useSelector } from 'react-redux';
import { NavItem, NavLabel } from '../../../common/components';
import { DashboardIcon, DataIcon, UserControlIcon } from '../../../common/components/icons';

export const SideBar = () => {
    const { navOpen } = useSelector(state => state.adminLayout);
    return (
        <>
            <div className={ `${navOpen == null && `w-0 pl-0 md:w-[274px] md:pl-[32px]`} ${navOpen == true ? `w-[274px] pl-[32px]` : `w-0 pl-0`} fixed top-[78px] left-0 overflow-x-hidden overflow-y-auto transition-[width_padding] flex flex-col gap-4 bg-green-500 py-[48px] h-full min-h-[calc(100vh_-_78px)]` }>
                <NavLabel className="my-0 mb-0">Home</NavLabel>
                <NavItem label={ `Dashboard` } icon={ <DashboardIcon className="mr-3 -mb-1" /> }>
                    <NavItem label={ `Main Dashboard` } />
                    <NavItem label={ `Cost Dashboard` } />
                </NavItem>
                <NavLabel>Menu</NavLabel>
                <NavItem label={ `Data` } icon={ <DataIcon className="mr-3 -mb-1" /> }>
                    <NavItem label={ `Master Data` }>
                        <NavItem to={ `employees` } label={ `Employee Data` } className="-ml-2" />
                        <NavItem label={ `Tank` } className="-ml-2" />
                    </NavItem>
                </NavItem>
                <NavItem label={ `User Control` } icon={ <UserControlIcon className="mr-3 -mb-1" /> }>
                    <NavItem to={ `accounts` } label={ `Account` } />
                    <NavItem to={ `` } label={ `Account Management` } />
                    <NavItem to={ `` } label={ `Access` } />
                </NavItem>
            </div>
        </>
    );
};
