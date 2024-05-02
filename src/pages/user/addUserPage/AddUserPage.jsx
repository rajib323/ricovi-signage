import { useState } from 'react';
import BreadCrumb from '../../../components/breadCrumb/BreadCrumb'
import PrimaryButton from '../../../components/button/PrimaryButton'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';


const AddUserPage = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [showNewPassword, setShowNewPassword] = useState(true);

    return (
        <div className='h-[calc(100dvh-80px)] overflow-y-scroll box-border p-4 w-full md:p-8 bg-primaryBackground'>
            <BreadCrumb />
            <form className='border my-4 w-full bg-white rounded-lg p-4 px-5'>
                <h1 className='font-bold text-xl'>Add User</h1>
                <hr className='my-3' />
                <div className=''>
                    <div className='flex flex-wrap md:flex-nowrap gap-8'>
                        <div className='space-y-2 w-full md:w-3/5 2xl:w-full 2xl:max-w-[500px]'>
                            <label htmlFor="name" className='block text-md font-medium'>Name</label>
                            <input type="text" id='name' placeholder='Type name' className='bg-inputBox px-2 py-3 rounded-md w-full' />
                        </div>
                        <div className='space-y-2 w-full md:w-3/5 2xl:w-full 2xl:max-w-[500px]'>
                            <label htmlFor="email" className='block text-md font-medium'>Email</label>
                            <input type="text" id='email' placeholder='Type your Email' className='bg-inputBox px-2 py-3 rounded-md w-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap gap-8 my-5'>
                        <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[500px]'>
                            <label htmlFor="newPassword" className='block text-md font-medium'>Password</label>
                            <div className='relative'>
                                <input className='block bg-inputBox px-3 py-2 rounded-md my-2 max-w-[500px] w-full' type={showPassword ? 'password' : "text"} id='newPassword' placeholder='Your Password' />
                                <div onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                                    {
                                        showPassword ? <BsEyeFill />
                                            : <BsEyeSlashFill />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2 w-full md:w-2/5 2xl:w-full 2xl:max-w-[500px]'>
                            <label htmlFor="confirmPassword" className='block text-md font-medium'>Confirm Password</label>
                            <div className='relative'>
                                <input className='block bg-inputBox px-3 py-2 rounded-md my-2 max-w-[500px] w-full' type={showNewPassword ? 'password' : "text"} id='confirmPassword' placeholder='Your Password' />
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
                <div className='ms-auto w-fit flex flex-row-reverse items-center gap-5 mb-3 mt-8'>
                    <PrimaryButton>
                        <p className='w-fit'>Save</p>
                    </PrimaryButton>
                    <p className='w-fit'>Cancel</p>
                </div>
            </form>
        </div>
    )
}

export default AddUserPage
