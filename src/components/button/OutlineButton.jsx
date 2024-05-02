import React from 'react'
import { Link } from 'react-router-dom'

const OutlineButton = ({triggerFunction,children,linkPage}) => {
  return (
    <Link to={linkPage} onClick={triggerFunction} className='flex px-5 flex-shrink-0 cursor-pointer border py-2 text-neutral-800 text-md gap-2 rounded-md items-center'>
      {children}
    </Link>
  )
}

export default OutlineButton
