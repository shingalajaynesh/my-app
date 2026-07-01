import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Edit from "./component/Edit";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./component/CreatePost";


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
    {
        path: '/uploadpost',
        Component: CreatePost
    },
    ])