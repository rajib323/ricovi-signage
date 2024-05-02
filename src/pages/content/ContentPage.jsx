import { useState } from 'react'
import PrimaryButton from '../../components/button/PrimaryButton'
import { MdAdd } from "react-icons/md";
import { RiDeleteBinLine, RiSearch2Fill } from "react-icons/ri";
import OutlineButton from '../../components/button/OutlineButton';
import ContentItem from '../../components/contentItem/ContentItem';
import assets from '../../assets';
import Modal from '../../components/modal/Modal'
import { IoMdSearch } from 'react-icons/io';

const ContentPage = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const triggerDelete = () => {
    // write delete function here

  }

  function callDelete(currentRow) {
    setDeleteModal(true);
  }

  const closeModal = () => {
    setDeleteModal(false);
  }
  return (
    <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
      <div className='flex gap-5 mb-5 flex-col md:flex-row items-center'>
        <div className='relative bg-white w-full p-5 rounded-lg h-36'>
          <h3 className='text-2xl font-medium'>Content</h3>

          <div className='lg:absolute mt-5 md:mt-0 right-5 bottom-5 flex items-center'>
            <input type='text' className='h-8 focus:outline-none w-full md:max-w-[200px]' placeholder='Type here to search' />
            <IoMdSearch className='text-2xl ' />
          </div>
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
        <ContentItem onDeleteClicked={callDelete} imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem onDeleteClicked={callDelete} imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem onDeleteClicked={callDelete} imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />

        <ContentItem onDeleteClicked={callDelete} imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem onDeleteClicked={callDelete} imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />
        <ContentItem onDeleteClicked={callDelete} imgURL={assets.cardImage} title={"Galaxy of colors"} fileType={"JPG"} />

      </div>

      <Modal showModal={deleteModal} closeModal={closeModal}>
        <h3 className='font-bold text-md mt-5'>Warning</h3>
        <p className='text-neutral-500 my-10'>Do you want to  This media?</p>
        <div className='mb-5 flex gap-5'>
          <PrimaryButton triggerFunction={triggerDelete}>
            Delete
          </PrimaryButton>
          <OutlineButton triggerFunction={closeModal}>
            Cancel
          </OutlineButton>
        </div>
      </Modal>

    </div>
  )
}

export default ContentPage