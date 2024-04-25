import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const HomeScreen = () => {
    return (
        <div className='w-screen h-screen absolute top-0 left-0'>
            <Navbar/>
            <div>
                <Sidebar />
                <Outlet />
            </div>

        </div>
    )
}

export default HomeScreen
