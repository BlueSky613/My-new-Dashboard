import React from "react";
import MainLayout from "../layouts";
import ScrapingPage from "../pages/ScrapingPage";
import Dashboard from "../pages/Dashboard";
import { Navigate } from "react-router-dom";

const MainRoutes = {

    path: "/",
    children: [
        {
            path: "/",
            element: (
                <MainLayout />
            ),
            children: [
                {
                    path: "/",
                    element: <Navigate to="/scraping" />
                },
                {
                    path: "/scraping",
                    element: <ScrapingPage />
                },
                {
                    path: "/dashboard",
                    element: <Dashboard />
                }
            ]
        },

    ],
};

export default MainRoutes;