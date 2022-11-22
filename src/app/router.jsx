import { createBrowserRouter, Outlet, } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { AdminLayout } from "../features/admin/adminLayout";
import { GuestLayouts } from "../features/guest/GuestLayouts";
import { Dashboard } from "../features/admin/dashboard";
import { Motor } from "../features/admin/motor";
import { Report } from "../features/admin/report";
import { Log } from "../features/admin/log";
import { Account } from "../features/admin/account/Account";
import { Access } from "../features/admin/access/Access";
import { Mapping } from "../features/admin/access/Mapping";
import { AddData } from "../features/admin/access/AddData";
import { Lines } from "../features/admin/line";
import { LineDetail } from "../features/admin/line_detail/LineDetail";
import { LineLog } from "../features/admin/line_log/LineLog";

const Root = () => { return <Outlet />; };

export default createBrowserRouter([
    {
        path: config.pathPrefix,
        element: <GuestLayouts />,
        errorElement: <Error404 />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
    {
        path: config.pathPrefix,
        element: <AdminLayout />,
        errorElemepnt: <Error404 />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'dashboard/motor',
                element: <Motor />
            },
            {
                path: 'report',
                element: <Report />
            },
            {
                path: 'log',
                element: <Log />
            },
            {
                path: 'account',
                element: <Account />
            },
            {
                path: 'access',
                element: <Access />,
            },
            {
                path: 'access/mapping',
                element: <Mapping />,
            },
            {
                path: 'access/add_data',
                element: <AddData />,
            },
            
            {
                path: 'dashboard/lines/',
                element: <Lines />,
            },
            {
                path: 'dashboard/lines/detail',
                element: <LineDetail />,
            },
            {
                path: 'dashboard/lines/detail/log',
                element: <LineLog />,
            }
        ]
    },
    // {
    //     path: config.pathPrefix,
    //     element: <AdminLayout />,
    //     errorElemepnt: <Error404 />,
    //     children: [
    //         {
    //             path: 'motor',
    //             element: <Motor />
    //         }
    //     ]
    // },
    // {
    //     path: config.pathPrefix,
    //     element: <AdminLayout />,
    //     errorElemepnt: <Error404 />,
    //     children: [
    //         {
    //             path: 'report',
    //             element: <Report />
    //         }
    //     ]
    // },
    // {
    //     path: config.pathPrefix,
    //     element: <AdminLayout />,
    //     errorElemepnt: <Error404 />,
    //     children: [
    //         {
    //             path: 'log',
    //             element: <Log />
    //         }
    //     ]
    // }
]);
