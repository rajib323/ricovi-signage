import React from 'react'
import { Link } from 'react-router-dom';

const PrimaryButton = ({triggerFunction,children,linkPage}) => {
  return (
    <Link to={linkPage} className='flex px-5 flex-shrink-0 cursor-pointer bg-primaryOrangeAccent py-2 text-white text-md gap-2 rounded-md items-center'>
      {children}
    </Link>
  )
}
export default PrimaryButton;
