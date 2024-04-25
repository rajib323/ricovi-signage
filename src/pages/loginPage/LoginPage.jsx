import React, { useState } from 'react'
import assets from '../../assets'
import { BsFillEyeFill,BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(true);
    return (
        <div className='w-screen h-screen absolute top-0 left-0 flex'>
            <img src={assets.loginbg} alt="login-page-background" className='lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] w-full h-full bg-red-500' />
            <div className='absolute lg:relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-0 lg:left-0 lg:translate-x-[unset] lg:translate-y-[unset] flex justify-center items-center max-w-[400px] w-[90%] md:w-full md:max-w-[unset]'>
                <div className='max-w-[400px] rounded-md bg-white w-full px-10 py-10 2xl:scale-125'>
                    <img src={assets.brand} alt="" className='w-36 mx-auto' />

                    <p className='text-sm tracking-wide mt-[40px]'>Already a user ?</p>
                    <h3 className='text-3xl font-bold my-2'>Sign In</h3>

                    <form className='my-[30px]'>
                        <label className='block' htmlFor="email">Email</label>
                        <input className='block bg-inputBox px-3 py-2 rounded-md my-2 max-w-[500px] w-full' type='email' id='email' placeholder='Your Email address' />
                        <label className='block' htmlFor="password">Password</label>
                        <div className='relative'>
                            <input className='block bg-inputBox px-3 py-2 rounded-md my-2 max-w-[500px] w-full' type={showPassword?'password':"text"} id='password' placeholder='Your Password' />
                            <div onClick={()=>setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2'>
                            {
                                showPassword?<BsEyeFill/>
                                :<BsEyeSlashFill/>

                            }
                            </div>
                        </div>

                        <p className='text-center my-5 text-sm font-normal'>Forgot password?</p>
                        <button className='text-center bg-primaryOrangeAccent w-full p-2 text-white text-xl font-medium md:py-4 rounded-xl'>Login</button>
                        <p className='text-center text-xl font-medium my-5'>Need an account?</p>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
