import React from 'react'
import BreadCrumb from '../../../components/breadCrumb/BreadCrumb'
import PrimaryButton from '../../../components/button/PrimaryButton'


const AddScreenPage = () => {
  
    return (
      <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
        <BreadCrumb />
        <form className='border my-4 w-full bg-white rounded-lg p-4 px-5'>
          <h1 className='font-bold text-xl'>Add Screen</h1>
          <hr className='my-3' />
          <div className='flex flex-wrap md:flex-nowrap  gap-8'>
            <div className='space-y-2 w-full md:w-3/5 2xl:w-full 2xl:max-w-[500px]'>
              <label htmlFor="name" className='block'>Name</label>
              <input type="text" id='name' placeholder='Type your screen name' className='bg-inputBox px-2 py-3 rounded-md w-full' />
            </div>
            <div className='space-y-2 w-full md:w-3/5 2xl:w-full 2xl:max-w-[500px]'>
              <label htmlFor="code" className='block'>Screen Code</label>
              <input type="text" id='code' placeholder='Type Screen Code' className='bg-inputBox px-2 py-3 rounded-md w-full' />
            </div>
          </div>
          <div className='ms-auto w-fit flex flex-row-reverse items-center gap-5 my-3'>
            <PrimaryButton>
               <p className='w-fit'>Save</p>
            </PrimaryButton>
            <p className='w-fit'>Cancel</p>
          </div>
        </form>
      </div>
  )
}

export default AddScreenPage
