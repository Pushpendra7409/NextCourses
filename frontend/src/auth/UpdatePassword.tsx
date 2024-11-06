// import React from 'react'
import { RxUpdate } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {

    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/signin');
    };

  return (
    <>
    <div className="w-screen h-screen overflow-hidden relative">
    <img src='/bg1.png' alt='bg-image'className="w-full h-full object-cover absolute top-0 left-0" />
    

    {/* Update Password Form Container */}
    <div className="flex items-center justify-center h-full relative z-10">
        <div className="p-8 rounded-lg shadow-lg max-w-sm w-full border-[2px] border-zinc-500">

        <h1 className="text-white text-3xl flex items-center justify-center mb-3"><RxUpdate /></h1>

        <h2 className="text-2xl font-bold mb-6 text-center text-white">Password Update</h2>

        <form>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2" htmlFor="password">New Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 text-white border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter New password" />
            </div>

            <div className="mb-6">
              <label className="block text-white font-semibold mb-2" htmlFor="password">Confirm Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 text-white border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Confirm password" />
            </div>

            <button type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-green-600 transition duration-200 mb-4">Update Password</button>

            <button onClick={handleClick} type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-blue-600 transition duration-200 mb-4">Back to Login</button>

        </form>

        </div>   
        </div>
        </div>
    </>
  )
}

export default UpdatePassword
