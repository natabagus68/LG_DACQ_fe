import { createBrowserRouter, Outlet, } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { AdminLayout } from "../features/admin/adminLayout";
import { GuestLayouts } from "../features/guest/GuestLayouts";
import { Dashboard } from "../features/admin/dashboard";

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
            }
        ]
    }
]);
