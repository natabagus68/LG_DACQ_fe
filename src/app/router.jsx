import { createBrowserRouter, Navigate, Outlet, } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { AdminLayout } from "../features/admin/adminLayout";
import { Dashboard } from "../features/admin/dashboard";
import { Motor } from "../features/admin/motor";
import { Report } from "../features/admin/report";
import { Log } from "../features/admin/log";
import { Account } from "../features/admin/account/Account";
import { Access } from "../features/admin/access/Access";
import { Mapping } from "../features/admin/access/Mapping";
import { AddData } from "../features/admin/access/AddData";
import { Line1 } from "../features/admin/line";
import { LineDetail } from "../features/admin/line_detail/LineDetail";
import { LineLog } from "../features/admin/line_log/LineLog";

import { AuthLayout } from "../features/auth/authLayout";
import { Login } from "../features/auth/login";

const Root = () => { return <Outlet />; };

export default createBrowserRouter([
    {
        path: config.pathPrefix,
        element: <AuthLayout />,
        errorElement: <Error404 />,
        children: [
            {
                path: '',
                element: <Navigate to={ `login` } replace />
            },
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
                path: '',
                element: <Navigate to={ `dashboard` } replace />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'lines/line-1',
                element: <Line1 />,
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
                path: 'dashboard/lines/detail',
                element: <LineDetail />,
            },
            {
                path: 'dashboard/lines/detail/log',
                element: <LineLog />,
            }
        ]
    },
]);
