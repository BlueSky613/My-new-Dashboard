// import pages
import { Outlet } from "react-router-dom";
import React from "react";

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    return (
        <div>
            <div className="md:fixed md:w-[15%] md:h-screen  md:visible invisible h-0">
                <Sidebar />
            </div>
            <div className="md:w-[85%] md:left-[15%] h-screen relative ">
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default MainLayout;
