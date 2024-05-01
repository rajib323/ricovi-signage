import {useState} from 'react'
import BreadCrumb from '../../../components/breadCrumb/BreadCrumb'
import assets from '../../../assets'
import { BsEyeFill,BsEyeSlashFill } from 'react-icons/bs'

const UserSettings = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);

  return (
    <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
      <BreadCrumb />
      <div className='border my-4 w-full bg-white rounded-lg p-4 px-5'>
        <p className='font-bold text-xl my-3 mb-6'>User Profile</p>
        <hr className='my-3 mb-6' />
        <div className='flex flex-col xl:flex-row gap-4'>
          <div className='w-[96%] flex flex-col gap-3 justify-center items-center'>
            <img src={assets.profileDemo} alt="user-profile" className='min-w-32 w-full aspect-square object-cover md:max-w-[230px] rounded-full' />
            <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[450px]'>
              <label htmlFor="name" className='block'>Name</label>
              <input type="text" id='name' placeholder='Name' className='bg-inputBox px-2 py-3 rounded-md w-full' />
            </div>
          </div>
          <div className='w-[96%] flex flex-col gap-8 justify-between items-center'>
            <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[450px]'>
              <label htmlFor="email" className='block'>Email</label>
              <input type="text" id='email' placeholder='Email' className='bg-inputBox px-2 py-3 rounded-md w-full' />
            </div>
            <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[450px]'>
              <label htmlFor="currPass" className='block'>Current Password</label>
              <div className='relative'>
                <input className='block bg-inputBox px-3 py-2 rounded-md my-2 max-w-[500px] w-full' type={showPassword ? 'password' : "text"} id='currPassword' placeholder='Your Password' />
                <div onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                  {
                    showPassword ? <BsEyeFill />
                      : <BsEyeSlashFill />
                  }
                </div>
              </div>
            </div>
            <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[450px]'>
              <label htmlFor="currPass" className='block'>New Password</label>
              <div className='relative'>
                <input className='block bg-inputBox px-3 py-2 rounded-md my-2 max-w-[500px] w-full' type={showNewPassword ? 'password' : "text"} id='currPassword' placeholder='Your Password' />
                <div onClick={() => setShowNewPassword(!showNewPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                  {
                    showNewPassword ? <BsEyeFill />
                      : <BsEyeSlashFill />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSettings
