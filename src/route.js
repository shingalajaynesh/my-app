import { createBrowserRouter } from "react-router";
import "./component/Profile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Edit from "./component/Edit";
import Dashboard from "./pages/Dashboard";


export const rootRoute = createBrowserRouter(
    [{
        path: '/',
        Component: Registration
    },
    {
        path: '/registration',
        Component: Registration
    },
    {
        path: '/dashboard',
        Component: Dashboard
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/edit',
        Component: Edit
    },
    ])