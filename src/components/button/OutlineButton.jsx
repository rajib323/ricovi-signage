import React from 'react'

const OutlineButton = ({triggerFunction,children}) => {
  return (
    <div className='flex flex-shrink-0 cursor-pointer px-5 py-2 gap-2 items-center max-w-40 w-full rounded-md bg-white'>
      {children}
    </div>
  )
}

export default OutlineButton
