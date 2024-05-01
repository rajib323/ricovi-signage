import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { useState } from 'react';

const HomeScreen = () => {
    const [openMenu, setOpenMenu] = useState(false);
    function toggleMenu() {
        setOpenMenu(!openMenu)
    }
    return (
        <div className='h-screen w-screen'>
            <Navbar toggleMenu={toggleMenu} />
            <div className='w-screen flex'>
                <Sidebar openMenu={window.innerWidth>768?true:openMenu} toggleMenu={toggleMenu} />
                <Outlet />
            </div>

        </div>
    )
}

export default HomeScreen
