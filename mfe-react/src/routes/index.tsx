import { createHashRouter, RouterProvider, Navigate, Outlet, useLocation } from "react-router-dom";
import React from "react";
import Home from "../views/home";
import Hello from "../views/hello";
import DynamicFormView from "../views/FormDinamic"

const Protect = ({ children }: { children: React.ReactNode }) => {
    if(false) {
        return <Navigate to="/home" />
    }

    return <>{children}</>
}

const routes = createHashRouter ([
    {
        element: 
            <Protect>
                <Home/>
            </Protect>,
        path: "/home"
    },
    {
        element: <Hello/>,
        path: "/hello"
    },
    {
        element: <DynamicFormView />,
        path: "/form"
    }
]);

const AppRouter = () => <RouterProvider router={routes} />;

export default AppRouter;