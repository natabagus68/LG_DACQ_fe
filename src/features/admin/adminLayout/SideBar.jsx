import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavItem } from "../../../common/components";
import lg_electronics from "../../../assets/lg_electronics.png";
import {
    HiOutlineDesktopComputer,
    HiOutlineDocumentText,
    HiOutlineUsers,
    HiOutlineViewGrid,
    HiX,
} from "react-icons/hi";
import { TbActivity } from "react-icons/tb";
import { toggle } from "./adminLayoutSlice";
import { SettingsIcon } from "../../../common/components/icons";

export const SideBar = () => {
    const { navOpen } = useSelector((state) => state.adminLayout);
    const dispatch = useDispatch();
    const [bar, setBar] = React.useState({
        dashboard: true,
        monitor: false,
        report: false,
        log: false,
        user: false,
        setting: false,
    });

    const setActive = (e) => {
        setBar({
            dashboard: false,
            monitor: false,
            report: false,
            log: false,
            user: false,
            [e]: true,
        });
    };

    return (
        <>
            <div
                className={`${
                    navOpen ? "block" : "hidden"
                } flex absolute w-screen h-screen z-50`}
            >
                <div
                    className={`mt-[72px] z-50 flex flex-col bg-[#1B1A1A] w-[300px] border-r-[1px] border-[#514E4E] h-full`}
                >
                    <div className="flex-1 flex flex-col gap-4">
                        <div onClick={() => setActive("/")}>
                            <NavItem
                                label={`Dashboard`}
                                to={`dashboard`}
                                isActive={bar.dashboard}
                                icon={
                                    <HiOutlineViewGrid className="text-2xl" />
                                }
                            ></NavItem>
                        </div>
                        <div onClick={() => setActive("user")}>
                            <NavItem
                                label={`User`}
                                isActive={bar.user}
                                icon={<HiOutlineUsers className="text-2xl" />}
                            >
                                <NavItem
                                    to={`account`}
                                    label={`Account`}
                                    child={true}
                                />
                                <NavItem
                                    to={`access`}
                                    label={`Access`}
                                    child={true}
                                />
                            </NavItem>
                        </div>

                        {/* <div onClick={() => setActive("user")}>
                            <NavItem
                                label={`User`}
                                isActive={bar.user}
                                icon={<HiOutlineUsers className="text-2xl" />}
                            >
                                <NavItem
                                    to={`account`}
                                    label={`Account`}
                                    child={true}
                                />
                                <NavItem
                                    to={`access`}
                                    label={`Access`}
                                    child={true}
                                />
                            </NavItem>
                        </div> */}
                        <div onClick={() => setActive("setting")}>
                            <NavItem
                                to={`setting`}
                                label={`Settings`}
                                isActive={bar.setting}
                                icon={<SettingsIcon />}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="bg-[#000] bg-opacity-50 flex-1 cursor-pointer"
                    onClick={() => dispatch(toggle())}
                />
            </div>
        </>
    );
};
