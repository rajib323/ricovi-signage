import React, { useId } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const AddContentFile = ({ item,removeFile }) => {
    console.log(item);
    const id = useId();
    return (
        <div key={id} className='w-full h-[185px] overflow-hidden relative flex-shrink-0 max-w-[330px] flex flex-col justify-center items-center gap-3 bg-[#f3f3f3] text-sm text-neutral-700 aspect-video rounded-lg'>
            <img src={URL.createObjectURL(item)} alt="" className='w-full h-full' />
            <RiDeleteBinLine onClick={()=>removeFile(item)} className='cursor-pointer absolute top-4 right-4 bg-white/60 p-2 box-content rounded-lg' />
        </div>
    )
}

export default AddContentFile
