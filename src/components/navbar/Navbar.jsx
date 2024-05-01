import React from 'react'
import assets from '../../assets'
import { format } from 'date-fns'
import { FaRegBell } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";



const Navbar = ({toggleMenu}) => {
  

  return (
    <div className='flex justify-between h-20 px-5 md:px-10 py-5'>
      <div className='flex gap-2 items-center justify-end '>
        <HiMenuAlt1 onClick={toggleMenu}  className='text-2xl md:hidden cursor-pointer'/>
        <img src={assets.brand} alt="logo" className='w-28' />
      </div>
      <div className='flex items-center justify-end'>
        <p className='text-neutral-400 hidden md:flex me-3'>{format(Date.now(), "eeee, dd MMMM yyyy")}</p>
        <div className='rounded-full w-10 aspect-square mx-2 bg-slate-300 cursor-pointer'></div>
        <p className='hidden md:flex'>Minhaz Majumdar</p>
        <FaRegBell className='text-2xl ml-4' />
      </div>
    </div>
  )
}

export default Navbar
