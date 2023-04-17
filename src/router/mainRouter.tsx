import { Children } from "react";
import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Static/Layout";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import Signin from "../pages/Auth/Signin";
import Home from "../pages/Home/Home";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                path: "",
                element: <Home />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "signing",
                element: <Signin />
            },
            {
                path: "reset",
                element: <ResetPassword />
            },
        ]
    }
])