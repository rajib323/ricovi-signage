import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineClose } from "react-icons/ai";

const overlayAnimator={
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const modalAnimator={
    hidden:{
        opacity:0,
        scale:0
    },
    visible:{
        opacity:1,
        scale:1,
        transition:{
            delay:0.1
        }
    },
}

const Modal = ({ showModal, closeModal, children}) => {
    
    const overlayClicked=(e)=>{
        if(e.target.id==='overlay'||e.target.id==="closeButton"){
            closeModal();
        }
    }


    return (
        <AnimatePresence>
            {
                showModal &&
                <motion.div className='w-full h-full bg-black/50 z-50 fixed top-0 left-0 flex justify-center items-center'
                    id='overlay'
                    variants={overlayAnimator}
                    onClick={overlayClicked}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    <motion.div
                        className={`w-fit bg-white p-5 px-10 rounded-[10px] flex flex-col justify-center items-center `}
                        variants={modalAnimator}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal
