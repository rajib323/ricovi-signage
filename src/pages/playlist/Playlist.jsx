import React from 'react'
import { MdAdd } from 'react-icons/md';
import PrimaryButton from '../../components/button/PrimaryButton';
import OutlineButton from '../../components/button/OutlineButton';
import { RiDeleteBinLine } from 'react-icons/ri';
import PlayListItem from '../../components/playListItem/PlayListItem';
import { IoMdSearch } from 'react-icons/io';



const Playlist = () => {
    return (
        <div className='h-[calc(100dvh-70px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
            <div className='flex gap-5 mb-5 flex-col md:flex-row items-center'>
                <div className=' bg-white relative w-full p-5 rounded-lg h-32'>
                    <h3 className='text-2xl font-medium'>Playlist</h3>
                    <div className='lg:absolute mt-5 md:mt-0 right-5 bottom-5 flex items-center'>
                        <input type='text' className='h-8 focus:outline-none w-full md:max-w-[200px]' placeholder='Type here to search' />
                        <IoMdSearch className='text-2xl ' />
                    </div>
                </div>
                <div className='space-y-2 flex-shrink-0 flex flex-col sm:flex-row md:flex-col w-fit ms-auto items-center space-x-2'>
                    <PrimaryButton linkPage={'/playlist/add-playlist'}>
                        <MdAdd className='text-xl' />
                        <p>Add Content</p>
                    </PrimaryButton>

                    <OutlineButton>
                        <RiDeleteBinLine className='text-xl text-black/50' />
                        <div className='text-xs text-black/50 text-center'>
                            <p>0/1</p>
                            <p>Delete Selected</p>
                        </div>
                    </OutlineButton>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5'>
                <PlayListItem key="asdasdasd" title="Playlist 1" />
                <PlayListItem key="asdasdasgrrrw" title="Playlist 1" />
            </div>


        </div>
    )
}

export default Playlist;