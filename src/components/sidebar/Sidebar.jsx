import React from 'react'
import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { CgPlayList } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
    return (
        <div className='w-full max-w-[300px] py-5 flex flex-col justify-between h-[calc(100dvh-80px)]'>
            <ul className=''>
                <li className='cursor-pointer bg-primaryOrangeAccent text-center  flex items-center gap-2 py-5 pl-10 text-white font-medium rounded-r-2xl'><TbLayoutDashboard />Dashboard</li>
                <li className='cursor-pointer text-center py-5 text-neutral-500 flex items-center pl-10 gap-2'><TbLayoutDashboard />Content</li>
                <li className='cursor-pointer text-center py-5 text-neutral-500 flex items-center pl-10 gap-2'><FaRegUser />User</li>
                <li className='cursor-pointer text-center py-5 text-neutral-500 flex items-center pl-10 gap-2'><CgScreen />Screen</li>
                <li className='cursor-pointer text-center py-5 text-neutral-500 flex items-center pl-10 gap-2'><CgPlayList />Playlist</li>
                <li className='cursor-pointer text-center py-5 text-neutral-500 flex items-center pl-10 gap-2'><CiSettings />Settings</li>
            </ul>

            <div className='pl-10'>
                <p className='cursor-pointer underline text-black'>Upgrade to Pro</p>

                <p className='cursor-pointer text-center my-5 text-neutral-500 flex items-center gap-2'><TbLogout2 />Logout</p>

            </div>
        </div>
    )
}

export default Sidebar
