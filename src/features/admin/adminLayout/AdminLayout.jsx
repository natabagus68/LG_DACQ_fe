import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { BurgerIcon, SearchIcon, AppLogoText } from '../../../common/components/icons';
import { Loader } from '../../../common/components';
import userAvatar from '../../../assets/user.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './adminLayoutSlice';
import { Select } from '../../../common/components/input';
import { Menu } from '@headlessui/react';
import { SideBar } from './SideBar';
import { useGetAuthenticatedUserQuery, useLogoutMutation } from '../../auth/authApiSlice';

export const AdminLayout = () => {
    const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
    const { navOpen } = useSelector(state => state.adminLayout);
    const dispatch = useDispatch();
    const [logout, { logoutIsLoading }] = useLogoutMutation();
    if (isLoading || logoutIsLoading) return <Loader />;
    if (isError || !auth?.data) return <Navigate to={ `login` } />;
    return (
        <div className="w-full">
            <div className="fixed top-0 flex bg-green-500 z-10 shadow-lg w-full">
                <div className="py-[15px] px-[48px] lg:w-[274px]">
                    <AppLogoText width={ `auto` } height={ `46px` } />
                </div>
                <div className="py-[15px] px-[48px] flex-1 flex items-center ">
                    <BurgerIcon onClick={ () => dispatch(toggle()) } className="cursor-pointer" />
                    <div className="relative">
                        <input type="text" className="ml-[56px] py-3 rounded-lg bg-green-600 text-white placeholder-green-300 px-4" placeholder="Search" />
                        <div className="absolute right-0 top-0 h-full pr-4 flex items-center">
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="flex ml-auto gap-10 items-center">
                        <div className="hidden lg:flex gap-6">
                            <Select placeholder={ `All Area` } />
                            <Select placeholder={ `Select Station` } />
                            <Select placeholder={ `Select Location` } />
                        </div>
                        <Menu as="div" className="relative">
                            <Menu.Button>
                                <div className="flex gap-3 cursor-pointer">
                                    <img className="w-[29px] h-[29px]" src={ userAvatar } alt="" />
                                    <span className="text-white">{ auth.data.name }</span>
                                </div>
                            </Menu.Button>
                            <Menu.Items className="absolute">
                                <Menu.Item>
                                    { ({ active }) => (
                                        <button onClick={ () => logout() } className="px-3 py-1 rounded bg-gray-500 text-green-500">Logout</button>
                                    ) }
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                    </div>
                </div>
            </div>
            <div className="relative z-0">
                <SideBar />
                <div className={ `${(navOpen == null || navOpen == true) && `md:ml-[274px]`} transition-[margin] mt-[78px] py-[37px] px-[48px] flex-1 overflow-auto` }>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
