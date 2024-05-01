import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import assets from '../../assets';


const ContentItem = ({ imgURL, title, fileType }) => {
    return (
        <div className='rounded-lg bg-white max-w-[280px] md:max-w-[350px]'>
            <div className='relative z-0'>
                <RiDeleteBinLine className='cursor-pointer absolute top-4 right-4 bg-white/60 p-2 box-content rounded-lg' />
                <img src={imgURL} alt="card-image" className='w-full object-cover ' />
            </div>
            <div className='p-4 flex text-sm font-medium'>
                <p className='text-nowrap flex-shrink-0'>{title}</p>
                <img src={assets.imgFileType} alt="type" className='ms-auto flex-shrink-0 hidden md:flex'/>
                <p className='ml-2 flex-shrink-0 hidden md:flex'>{fileType}</p>
            </div>
        </div>
    )
}

export default ContentItem