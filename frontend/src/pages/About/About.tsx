// import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen overflow-hidden relative">
        <img src='/bg4.png' alt='bg-image' className="w-full h-full object-cover absolute top-0 left-0" />

        {/* About Us Title */}
        <div className="flex justify-center items-center relative z-10 pt-10 md:pt-20 text-3xl md:text-4xl lg:text-5xl text-white">
          <h1>About Us</h1>
        </div>

        {/* Mission Statement */}
        <div className="container mx-auto px-6 md:px-20 lg:px-40 relative z-10 pt-8 md:pt-16 text-lg md:text-xl lg:text-2xl text-zinc-400 flex items-center justify-center">
          <p className="text-center md:text-left w-full">
            Skill-X's mission is to permeate through every student/professional's outlook towards
            jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course
            I Can Do It". We aim to do this by providing exceptional upskilling courses at
            affordable rates, while being tech-forward so anyone, anywhere can access and improve their
            ability to be successful in life.
          </p>
        </div>

        {/* Our Mission Title */} 
        <div className="flex justify-center items-center relative z-10 pt-10 md:pt-20 text-3xl md:text-4xl lg:text-5xl text-white">
          <h1>Our Mission</h1>
        </div>

           {/* Mission Statement */}
           <div className="container mx-auto px-6 md:px-20 lg:px-40 relative z-10 pt-8 md:pt-16 text-lg md:text-xl lg:text-2xl text-zinc-400 flex items-center justify-center">
          <p className="text-center md:text-left w-full">
          Skill-X is the result of a continual effort to exponentially increase the employability
          of every Indian, irrespective of their socioeconomic status. With accessibility 
          and affordability being the support structure of high-quality, industry-relevant 
          courses, PW Skills aims to empower professionals and students alike to either jumpstart 
          their careers or leverage existing skills with new, future-driven upgrades 
          that will help them realise their full potential.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
