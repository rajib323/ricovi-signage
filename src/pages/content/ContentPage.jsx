import React from 'react'
import PrimaryButton from '../../components/button/PrimaryButton'
import { MdAdd } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import OutlineButton from '../../components/button/OutlineButton';
import ContentItem from '../../components/contentItem/ContentItem';
import assets from '../../assets';

const ContentPage = () => {
  return (
    <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
      <div className='flex gap-5 mb-5 flex-col md:flex-row items-center'>
        <div className=' bg-white w-full p-5 rounded-lg h-36'>
          <h3 className='text-2xl font-medium'>Content</h3>
        </div>
        <div className='space-y-2 flex-shrink-0 flex flex-col sm:flex-row md:flex-col w-fit ms-auto items-center space-x-2'>
          <PrimaryButton linkPage={'/content/add-content'}>
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

      {/* w-fit max-w-[270px] sm:max-w-[unset] */}
      <div className='flex flex-wrap gap-2 justify-center'>
        <ContentItem imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />

        <ContentItem imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />

      </div>

    </div>
  )
}

export default ContentPage