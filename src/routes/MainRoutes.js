import React from "react";
import MainLayout from "../layouts";
import ScrapingPage from "../pages/ScrapingPage";

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
                    path: "/scraping",
                    element: <ScrapingPage />
                }
            ]
        },

    ],
};

export default MainRoutes;