// import React from 'react'
import Navbar from "../../components/Navbar"
import Companies from "../../components/ui/Companies";
import Counter from "../../components/ui/Counter";
import Courses from "../../components/ui/Courses";
import Hero from "../../components/ui/Hero";
import Video from "../../components/ui/Video";


const UserDashboard = () => {

  return (
   <>
   <Navbar />
   <Hero />
   <Counter />
   <Video />
   <Courses />
   <Companies />

   </>
  )
}

export default UserDashboard
