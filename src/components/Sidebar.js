import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#060b26] h-[92%] my-5 mx-2 flex flex-col items-center text-center rounded-[32px]">
            <div className="flex items-center justify-center mt-16 mb-5">
                <img src="Dallas Mavericks Mavs.png" alt="" width="70px" />
                <div className="text-white">Product Dashboard</div>
            </div>
            <hr className="w-[70%] bg-white" />
            <div className="my-10 hover:cursor-pointer text-white font-bold text-xl flex items-center gap-4 bg-gray-800 w-48 px-5 py-3 rounded-xl" onClick={() => navigate("/scraping")}>
                <img src="square.png" alt="" width="30px" />
                Scraping
            </div>
            <div className="hover:cursor-pointer text-white font-bold text-xl flex items-center gap-4 w-48 px-5 py-3 rounded-xl" onClick={() => navigate("/dashboard")}>
                <img src="table.png" alt="" width="30px" />
                Dashboard
            </div>
        </div>
    );
};

export default Sidebar;