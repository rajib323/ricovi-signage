import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineClose } from "react-icons/ai";
import assets from '../../assets/kitchenManager/index'

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

const Modal = ({ showModal, closeModal, children, title,titleClass="text-2xl font-bold py-4",modalClass="max-w-[400px]"}) => {
    
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
                        className={`w-full bg-white p-5 rounded-2.5xl ${modalClass}`}
                        variants={modalAnimator}
                    >
                        <div className='flex items-center'>
                            <h3 className={titleClass}>{title}</h3>
                            <AiOutlineClose id='closeButton' onClick={overlayClicked} className='ms-auto cursor-pointer text-xl border box-content p-2 rounded-md' />
                        </div>

                        {children}
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal
