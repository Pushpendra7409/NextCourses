// import React from 'react'
import { useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";


const Navbar = () => {

  const [showMenu, setShowMenu]  = useState(false);
    const toggleNavbar = () => {
      setShowMenu(!showMenu);
    }


  return (
   <>
   <nav className='sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80'>
    <div className='container px-4 mx-auto relative text-sm'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center flex-shrink-0'>
          <img src='/logo.png' alt="logo" className="h-10 w-10 mr-2"/>
          <span className="text-2xl tracking-tight ">NextSkill</span>
        </div>

        <ul className="hidden lg:flex ml-14 space-x-12 text-xl ">
          <li><a href="/user/dashboard">Home</a></li>
          <li><a href="/user/course">Courses</a></li>
          <li><a href="/about">About</a></li>
        </ul>
  

        <div className="hidden lg:flex justify-center space-x-5 items-center">

        <div className='flex items-center flex-shrink-0'>
          <img src='/logo.png' alt="logo" className="h-10 w-10 mr-2 rounded-full border-[2px]"/>
          <span className="text-xl tracking-tight ">Profile Picture</span>
        </div>

          <a href="/signin" className=" text-blue-600 text-xl">Login</a>
          <a href="/signup" className=" text-blue-600 text-xl">Register</a>
        </div>

        <div className="lg:hidden md:flex flex-col justify-end text-3xl py-3">
          <button onClick={toggleNavbar}>
            {showMenu? <CgClose /> : <HiOutlineMenu />}
          </button>
        </div>

      </div>

      {showMenu && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">

        <ul className='text-white text-xl'>
          <li className='py-3'><a href="#">Home</a></li>
          <li className='py-3'><a href="#">Courses</a></li>
          <li className='py-3'><a href="#">About</a></li>
        </ul>

        <div className='text-white text-xl text-center'>
        
          <a href="/signin" className="block text-xl py-3">Login</a>
          <a href="/signup" className="block text-xl py-3">Register</a>

          <div className='flex items-center py-3'>
          <span className="text-xl tracking-tight">Profile Picture</span>
        </div>

        </div>
        </div>
      )}
        


    </div>
    </nav>
   </>
  )
}

export default Navbar
