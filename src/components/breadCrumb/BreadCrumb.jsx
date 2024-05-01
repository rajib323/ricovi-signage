import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const BreadCrumb = () => {
  const breadCrumbItems=window.location.pathname.substring(1).replace("/"," ").split(" ");
  
  return (
    <h3 className='text-sm text-primaryOrangeAccent font-medium'>{breadCrumbItems.map((item,index)=><Link to={'/'+breadCrumbItems.slice(0,index+1).join("/")} key={`${item}-${index}`} className={`${index===breadCrumbItems.length-1?"text-neutral-900":"hover:underline cursor-pointer underline-offset-1"} capitalize`}>{item.replace("-"," ")}<IoChevronForwardOutline className={`${index===breadCrumbItems.length-1?"hidden":"text-black inline mx-1"}`}/></Link>)}</h3>
  )
}

export default BreadCrumb
