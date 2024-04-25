import React from 'react'
import assets from '../../assets'
import { format } from 'date-fns'
import { FaRegBell } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className='flex justify-between h-20 px-10 py-5'>
        <img src={assets.brand} alt="logo" className='w-28' />
        <div className='flex gap-10 items-center'>
            <p className='text-neutral-400'>{format(Date.now(),"eeee, dd MMMM yyyy")}</p>

            <p>Minhaz Majumdar</p>
            <FaRegBell className='text-2xl'/>
        </div>
    </div>
  )
}

export default Navbar
