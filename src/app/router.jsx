import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { AdminLayout } from "../features/admin/adminLayout";
import { Dashboard } from "../features/admin/dashboard";
import { Report } from "../features/admin/report";
import { Account } from "../features/admin/account/Account";
import { Access } from "../features/admin/access/Access";
import { Mapping } from "../features/admin/access/Mapping";
import { AddData } from "../features/admin/access/AddData";
import { Line1 } from "../features/admin/line";
import { LineLog } from "../features/admin/line_log/LineLog";

import { AuthLayout } from "../features/auth/authLayout";
import { Login } from "../features/auth/login";
import { Asis } from "../features/admin/line_detail/Asis";
import { OnepoleTwopole } from "../features/admin/line_detail/OnepoleTwopole";
import { LineLog1p2p } from "../features/admin/line_log/LineLog1p2p";
import { Hipot } from "../features/admin/line_detail/Hipot";
import { LineLogHipot } from "../features/admin/line_log/LineLogHipot";
import { Shipmode } from "../features/admin/line_detail/Shipmode";
import { LineLogShipmode } from "../features/admin/line_log/LineLogShipmode";
import { OptionAuto } from "../features/admin/line_detail/OptionAuto";
import { LineLogOptionAuto } from "../features/admin/line_log/LineLogOptionAuto";
import { OptionManual } from "../features/admin/line_detail/OptionManual";
import { LineLogOptionManual } from "../features/admin/line_log/LineLogOptionManual";
import { WhiteBalance } from "../features/admin/line_detail/WhiteBalance";
import { LineLogWhiteBalance } from "../features/admin/line_log/LineLogWhiteBalance";
import { DTVInspection } from "../features/admin/line_detail/DTVInspection";
import { LineLogDTVInspection } from "../features/admin/line_log/LineLogDTVInspection";
import { AccountDetail } from "../features/admin/account/AccountDetail";
import { TrashAccount } from "../features/admin/account/TrashAccount";

const Root = () => {
    return <Outlet />;
};

export default createBrowserRouter([
    {
        path: config.pathPrefix,
        element: <AuthLayout />,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: <Navigate to={`login`} replace />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: config.pathPrefix,
        element: <AdminLayout />,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: <Navigate to={`dashboard`} replace />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "lines/line-1",
                element: <Line1 />,
            },
            {
                path: "lines/line-1/asis",
                element: <Asis />,
            },
            {
                path: "lines/line-1/asis/log",
                element: <LineLog />,
            },
            {
                path: "lines/line-1/onepole-twopole",
                element: <OnepoleTwopole />,
            },
            {
                path: "lines/line-1/onepole-twopole/log",
                element: <LineLog1p2p />,
            },
            {
                path: "lines/line-1/hipot",
                element: <Hipot />,
            },
            {
                path: "lines/line-1/hipot/log",
                element: <LineLogHipot />,
            },
            {
                path: "lines/line-1/shipmode",
                element: <Shipmode />,
            },
            {
                path: "lines/line-1/shipmode/log",
                element: <LineLogShipmode />,
            },
            {
                path: "lines/line-1/dtv-inspection",
                element: <DTVInspection />,
            },
            {
                path: "lines/line-1/dtv-inspection/log",
                element: <LineLogDTVInspection />,
            },
            {
                path: "lines/line-1/option-auto",
                element: <OptionAuto />,
            },
            {
                path: "lines/line-1/option-auto/log",
                element: <LineLogOptionAuto />,
            },
            {
                path: "lines/line-1/option-manual",
                element: <OptionManual />,
            },
            {
                path: "lines/line-1/option-manual/log",
                element: <LineLogOptionManual />,
            },
            {
                path: "lines/line-1/white-balance",
                element: <WhiteBalance />,
            },
            {
                path: "lines/line-1/white-balance/log",
                element: <LineLogWhiteBalance />,
            },
            {
                path: "report",
                element: <Report />,
            },
            {
                path: "account",
                element: <Account />,
            },
            {
                path: "trash-account",
                element: <TrashAccount />,
            },
            {
                path: "account/:id/detail",
                element: <AccountDetail />,
            },
            {
                path: "access",
                element: <Access />,
            },
            {
                path: "access/mapping",
                element: <Mapping />,
            },
            {
                path: "access/add_data",
                element: <AddData />,
            },
            {
                path: "dashboard/lines/detail/log",
                element: <LineLog />,
            },
        ],
    },
]);
