// import React from 'react'
import { IoMdLogIn } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/user/dashboard');
  };
  return (
    <>
    <div className="w-screen h-screen overflow-hidden relative">
      <img src='/bg1.png' alt='bg-image'className="w-full h-full object-cover absolute top-0 left-0" />

      {/* Login Form Container */}
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="p-8 rounded-lg shadow-lg max-w-sm w-full border-[2px] border-zinc-500">
        <h1 className="text-white text-3xl flex items-center justify-center mb-3"><IoMdLogIn /></h1>

          <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>

          <form>

            <div className="mb-4">
              <label className="block text-white font-semibold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 text-white border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter your email" />
            </div>

            <div className="mb-6">
              <label className="block text-white font-semibold mb-2" htmlFor="password">Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 text-white border border-zinc-500 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500" placeholder="Enter your password" />
            </div>

            <button onClick={handleClick} type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-blue-600 transition duration-200 mb-4">Login</button>
            
            <div className='flex justify-center w-full'>
              <button className="text-white w-full bg-transparent rounded-full hover:bg-red-600 border-[1px] py-2 border-zinc-500 flex justify-center transition duration-200 gap-2">
                <FcGoogle className='w-6 h-6'/>Continue with Google
              </button>
            </div>
            
            <p className="text-white text-center mt-6">Don't have an account? <Link to={"/signup"} className="text-blue-500 hover:text-blue-600">Sign Up</Link></p>
            <p className="text-white text-center mt-6"><Link to={"/forgot/password"} className="text-blue-500 hover:text-blue-600">Forgot Password</Link></p>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
