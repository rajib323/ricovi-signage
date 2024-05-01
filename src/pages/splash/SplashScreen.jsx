import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import assets from '../../assets/index';
import LoginPage from '../loginPage/LoginPage';
import HomeScreen from '../home/HomeScreen';

const logoAnimation = {
  "visible": {
    opacity: 1,
    scale: 1
  },
  "hidden": {
    opacity: 0,
    scale: 0.5
  }
}

const splashAnimation = {
  "visible": {
    opacity: 1,
  },
  "hidden": {
    opacity: 0
  }
}


const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const token = localStorage.getItem("token");


  useEffect(() => {
    const timer = setTimeout(
      function () {
        console.log("changed");
        setShowSplash(false);
      },
      1500
    )


  }, [])


  return (
    <div className='relative'>
      <motion.div variants={splashAnimation} initial="visible" animate={showSplash ? "visible" : "hidden"} className={`bg-black w-screen h-screen flex justify-center items-center absolute top-0 left-0 z-10 ${showSplash?"":"hidden"}`}>
        <motion.div variants={logoAnimation} animate="visible" exit="hidden" initial="hidden" transition={{ type: "spring" }}>
          <img src={assets.brandlogo} />
        </motion.div>
      </motion.div>


      {
        !token ?
          <HomeScreen /> 
          :<LoginPage />}




    </div>
  )
}

export default SplashScreen
