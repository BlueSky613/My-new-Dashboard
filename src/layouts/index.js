import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div className="md:left-[15%] w-3/4">
                <Navbar/>
                <Outlet/>
            </div>

            <div className="w-1/4">
                
                <Sidebar/>

            </div>
           
            
        </>
    );
};  

export default MainLayout;