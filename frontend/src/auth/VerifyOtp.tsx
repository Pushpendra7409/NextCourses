import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const VerifyOtp: React.FC = () => {
  // Define the state for OTP as an array of strings
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);

  // Define the handleChange function with proper types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const value = e.target.value;
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);

    // Move to the next input field if a value is entered
    if (value && index < 5) {
      document.getElementById(`otp${index + 2}`)?.focus();
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signin');
  };

  


  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative">
        <img
          src='/bg2.png'
          alt='bg-image'
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        {/* Verify OTP Container */}
        <div className="flex items-center justify-center h-full relative z-10">
          <div className="p-8 rounded-lg shadow-lg max-w-sm w-full border-[2px] border-zinc-500">

            <h1 className="text-white text-3xl flex items-center justify-center mb-3">
              <CiLock />
            </h1>

            <h2 className="text-2xl font-bold mb-6 text-center text-white">Verify OTP</h2>

            {/* Six fields */}
            <form>
              <div className="flex space-x-2">
                {otp.map((value, index) => (
                  <div key={index} className="w-1/6">
                    <label
                      className="block text-white font-semibold mb-2"
                      htmlFor={`otp${index + 1}`}
                    >
                      {/* Label content can be added here if needed */}
                    </label>
                    <input
                      type="text"
                      id={`otp${index + 1}`}
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full px-4 py-2 border bg-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 hover:border-zinc-500"
                    />
                  </div>
                ))}
              </div>

            <button type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-blue-600 transition duration-200 mt-5">Verify</button>

            <button onClick={handleClick} type="submit" className="w-full bg-transparent border-[1px] border-zinc-500 rounded-full text-white py-2 hover:bg-blue-600 transition duration-200 mt-4">Back to Login</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
