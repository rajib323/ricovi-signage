import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';


const PlaylistItemCard = ({imgURL,lastCard}) => {
    return (
        <div className={`relative z-0 max-w-[250px] max-h-[180px] rounded-md overflow-hidden ${lastCard?"before:w-full before:h-2/3 before:bg-line before:bg-gradient-to-t before:to-black/0 before:from-black/100 before:absolute before:bottom-0 before:left-0":""}`}>
            <RiDeleteBinLine className='cursor-pointer absolute top-4 right-4 bg-white/60 p-2 box-content rounded-lg' />
            <img src={imgURL} alt="card-image" className='w-full h-full object-cover ' />
            {
                lastCard?
                <div className='absolute z-10 text-2xl lowercase text-white font-bold bottom-4 right-7'>
                    <span className='mx-2 text-3xl'>10</span>More
                </div>:null
            }
        </div>
    )
}

export default PlaylistItemCard
