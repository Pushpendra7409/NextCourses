// import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Learning Platform','Affordable Courses','Interactive Courses','Free Courses'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 100,
        pauseAfterDelete: true,
        cursor: true,
        cursorStyle: '|',
        cursorBlink: true,
    
    })
  return (
    <>
    <div className="pb-10 pt-20 bg-black w-full">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-items-center">
    {/* Left Section */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-6xl mt-10 md:mt-24 select-none text-white">
        Stay Ahead of the Curve
        <br />
        <span className="block mt-3">With Our</span>
        <span className="text-cyan-500">{text}</span>
        <span style={{ color: 'red' }}><Cursor /></span>
      </h1>

      <p className="mt-6 md:mt-10 select-none text-lg md:text-2xl text-white px-4 md:px-0">
        Discover a new way to learn with interactive courses, real-time feedback, and personalized content tailored to your unique learning style. Embrace the future of education and transform your skills today.
      </p>

      <button className="mt-8 md:mt-10 p-3 border-[1px] bg-blue-700 hover:bg-blue-500 rounded-full px-10 text-base md:text-lg text-white font-semibold">
        Get Started
      </button>
    </div>

    {/* Right Section */}
    <div className="flex flex-col items-center mt-10 md:mt-0">
      <div className="w-2/3 md:w-[40%]">
        <img src="/hero.png" alt="hero" className="object-contain" />
      </div>

      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-5xl md:text-9xl text-center mt-8 md:mt-10 select-none">
        Skills that <br /> Matter
      </h1>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero
