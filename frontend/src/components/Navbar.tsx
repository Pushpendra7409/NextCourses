// import React from 'react'
import { useState } from 'react';


const Navbar = () => {
  return (
   <>
   <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
    <div className='container px-4 mx-auto relative text-sm'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center flex-shrink-0'>
          <img src='/logo.png' alt="logo" className="h-10 w-10 mr-2"/>
          <span className="text-xl tracking-tight">NextSkill</span>
        </div>

        <ul className="hidden lg:flex ml-14 space-x-12 text-xl">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About</a></li>
        </ul>
  

        <div className="hidden lg:flex justify-center space-x-5 items-center">

        <div className='flex items-center flex-shrink-0'>
          <img src='/logo.png' alt="logo" className="h-10 w-10 mr-2 rounded-full border-[2px]"/>
          <span className="text-xl tracking-tight">Pushpendra Singh</span>
        </div>

          <a href="#" className="bg-blue-500 py-2 px-3 border rounded-md">Sign In</a>
          <a href="#" className="bg-blue-500 py-2 px-3 border rounded-md">Sign Up</a>
        </div>

      </div>
    </div>
    </nav>
   </>
  )
}

export default Navbar
