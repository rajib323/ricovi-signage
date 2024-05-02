import React from 'react'
import { Link } from 'react-router-dom';

const PrimaryButton = ({triggerFunction,children,linkPage,className="px-5 "}) => {
  return (
    <Link to={linkPage} onClick={triggerFunction} className={`flex ${className} flex-shrink-0 cursor-pointer bg-primaryOrangeAccent py-2 text-white text-md gap-2 rounded-md items-center`}>
      {children}
    </Link>
  )
}
export default PrimaryButton;
