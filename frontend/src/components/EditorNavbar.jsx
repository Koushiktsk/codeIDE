import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar';
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";
import { toggleClass } from '../helper';
import { IoMdDownload } from "react-icons/io";

const EditorNavbar = () => {
  return (
    <>
      <div className="EditorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <img className='w-[150px] cursor-pointer' src={logo} alt="" />
        </div>
        <p>File/ <span className='text-[gray]'>Myproject</span></p>
        <i className='p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px] '><IoMdDownload /></i>

        
      </div>
    </>
  )
}

export default EditorNavbar
