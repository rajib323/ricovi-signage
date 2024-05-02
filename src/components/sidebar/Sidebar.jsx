import React, { useEffect, useState } from 'react'
import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { CgPlayList } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

let menuAnimation = {
    "visible": {
        translateX: "0%",
    },
    "hidden": {
        translateX: "-100%"
    }
}

const Sidebar = ({ openMenu,toggleMenu }) => {
    // const [isMobile, setMobile] = useState(true);
    
    
    const [currentActiveLink, setActive] = useState(window.location.pathname);

    return (
        <motion.div variants={window.innerWidth>768 ? undefined:menuAnimation} initial={"hidden"} transition={{ type: "linear" }} animate={openMenu ? "visible" : "hidden"} exit={"hidden"} className='w-full max-w-[300px] z-10 md:z-[unset] bg-white py-5 flex flex-col justify-between h-[calc(100dvh-80px)] absolute md:relative '>
            <ul className=''>
                <li className={`cursor-pointer text-center py-5 pl-10 ${currentActiveLink==="/" ? "bg-primaryOrangeAccent  text-white font-medium rounded-r-2xl" : ""}`}><Link onClick={() => {setActive("/");toggleMenu();}} className='flex items-center gap-2' to={"/"}><TbLayoutDashboard />Dashboard</Link></li>
                <li className={`cursor-pointer text-center py-5 pl-10 ${currentActiveLink.startsWith("/content") ? "bg-primaryOrangeAccent  text-white font-medium rounded-r-2xl" : ""}`}><Link onClick={() => {setActive("/content");toggleMenu();}} className='flex items-center gap-2' to={"/content"}><TbLayoutDashboard />Content</Link></li>
                <li className={`cursor-pointer text-center py-5 pl-10 ${currentActiveLink.startsWith("/user") ? "bg-primaryOrangeAccent  text-white font-medium rounded-r-2xl" : ""}`}><Link onClick={() => {setActive("/user");toggleMenu();}} className='flex items-center gap-2' to={"/user?page=1"}><FaRegUser />User</Link></li>
                <li className={`cursor-pointer text-center py-5 pl-10 ${currentActiveLink.startsWith("/screen") ? "bg-primaryOrangeAccent  text-white font-medium rounded-r-2xl" : ""}`}><Link onClick={() => {setActive("/screen");toggleMenu();}} className='flex items-center gap-2' to={"/screen?page=1"}><CgScreen />Screen</Link></li>
                <li className={`cursor-pointer text-center py-5 pl-10 ${currentActiveLink.startsWith("/playlist") ? "bg-primaryOrangeAccent  text-white font-medium rounded-r-2xl" : ""}`}><Link onClick={() => {setActive("/playlist");toggleMenu();}} className='flex items-center gap-2' to={"/playlist"}><CgPlayList />Playlist</Link></li>
                <li className={`cursor-pointer text-center py-5 pl-10 ${currentActiveLink.startsWith("/settings") ? "bg-primaryOrangeAccent  text-white font-medium rounded-r-2xl" : ""}`}><Link onClick={() => {setActive("/settings");toggleMenu();}} className='flex items-center gap-2' to={"/settings/user-profile"}><CiSettings />Settings</Link></li>
            </ul>

            <div className='pl-10'>
                <p className='cursor-pointer underline text-black'>Upgrade to Pro</p>

                <p className='cursor-pointer text-center my-5 text-neutral-500 flex items-center gap-2'><TbLogout2 />Logout</p>

            </div>
        </motion.div>
    )
}

export default Sidebar
