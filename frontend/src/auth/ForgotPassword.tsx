// import React from 'react'
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
  };


  return (
   <>
   <div className="w-screen h-screen overflow-hidden relative">
   <img src='/bg2.png' alt='bg-image'className="w-full h-full object-cover absolute top-0 left-0" />
  
   
   {/* Forgot Password Form Container */}
   <div className="flex items-center justify-center h-full relative z-10">
        <div className="p-8 rounded-lg shadow-lg max-w-sm w-full border-[2px] border-zinc-500">

        <h1 className="text-white text-3xl flex items-center justify-center mb-3"><CiLock /></h1>

         <h2 className="text-2xl font-bold mb-6 text-center text-white">Forgot Password</h2>

         <form>

            <div className="mb-4">
              <label className="block text-white font-semibold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 text-white border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter your registered email" />
            </div>

            <div className="flex items-center justify-center">
            <div className="border-t border-zinc-400 w-1/4"></div>
            <span className="text-zinc-400 px-2">or</span>
            <div className="border-t border-zinc-400 w-1/4"></div>
            </div>

            <div className="mb-6 w-full">
                  <label className="block text-white font-semibold mb-2" htmlFor="mob">Mobile Number</label>
                  <input type="number" id="mob" className="w-full px-4 py-2 text-white border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter Mobile number" />
            </div>

            <button type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-green-600 transition duration-200 mb-4">Get Otp</button>
           
            <button onClick={handleClick} type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-blue-600 transition duration-200 mb-4">Back to Login</button>

           <div className="flex items-center justify-between">
           <p><Link to={"/signup"} className="text-blue-500 hover:text-blue-600 ">Register Here</Link></p>
           <p><Link to="/signin" className="text-blue-500 hover:text-blue-600">Login Here</Link></p>
           </div>
            
        </form>


        </div>
    </div>
    </div>
   </>
  )
}

export default ForgotPassword
