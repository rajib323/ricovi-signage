import React from 'react'
import { TbEdit } from "react-icons/tb";
import PrimaryButton from '../button/PrimaryButton';
import { IoAdd } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import assets from '../../assets';
import PlaylistItemCard from './PlaylistItemCard';


const PlayListItem = ({ title }) => {
    return (
        <div className='px-5 py-6 border w-full bg-white md:max-w-[500px] rounded-md'>
            <div className='flex'>
                <h2 className='text-xl flex gap-3 items-center'>{title}<TbEdit className='text-xl' /></h2>
                <RiDeleteBinLine className='cursor-pointer ms-auto right-4 bg-inputBox text-xl p-3 box-content rounded-lg' />
                <PrimaryButton className='p-3 ms-3'>
                    <IoAdd className='text-xl text-white' />
                </PrimaryButton>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4'>
                {
                    Array.from({length:window.screen.width>500?4:2}).map((item,index)=><PlaylistItemCard lastCard={index===3?true:false} imgURL={assets.loginbg}/>)
                }
                
            </div>
        </div>
    )
}

export default PlayListItem
