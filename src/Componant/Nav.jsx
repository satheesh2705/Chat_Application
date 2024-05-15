import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { TiMessageTyping } from "react-icons/ti";
import { LuSearchCode } from  "react-icons/lu";
import { BsCameraReels } from "react-icons/bs";


const Nav = () => {
  return (
    <div className='Nav'>
       <IoHomeOutline /> 
       <TiMessageTyping />
       <LuSearchCode />
       <BsCameraReels />
    </div>
  )
}

export default Nav
