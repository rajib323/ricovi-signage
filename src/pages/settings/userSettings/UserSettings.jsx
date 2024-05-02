import { useRef, useState } from 'react'
import BreadCrumb from '../../../components/breadCrumb/BreadCrumb'
import assets from '../../../assets'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import PrimaryButton from '../../../components/button/PrimaryButton'
import OutlineButton from '../../../components/button/OutlineButton'

const UserSettings = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const profImageRef = useRef(null);

  return (
    <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
      <BreadCrumb />
      <form className='border my-4 w-full bg-white rounded-lg p-4 px-5'>
        <p className='font-bold text-xl my-3 mb-6'>User Profile</p>
        <hr className='my-3 mb-6' />
        <div className='flex flex-col xl:flex-row gap-4'>
          <div className='w-[96%] flex flex-col gap-3 justify-center items-center'>
            <div className='min-w-32 cursor-pointer w-full aspect-square md:max-w-[230px] relative overflow-hidden rounded-full '>
              <div className='bg-black/35 px-8 text-center py-3 text-white/45 w-full h-1/3 absolute bottom-0 left-0'>
                Change profile photo
              </div>
              <img src={assets.profileDemo} onClick={() => profImageRef.current.click()} alt="user-profile" className='h-full w-full object-cover' />

              <input type="file" name="prof-image" className='hidden' ref={profImageRef} />
            </div>
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
        <div className='justify-end my-4 gap-4 flex w-[96%]'>
          <OutlineButton linkPage={"/playlist"}>
            Cancel
          </OutlineButton>
          <PrimaryButton>
            Save
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default UserSettings
