// import React from 'react'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'
import UpdatePassword from './auth/UpdatePassword'
import VerifyOtp from './auth/VerifyOtp'

import UserDashboard from './pages/UserDashboard/UserDashboard'
import Course from './pages/Course/Course'
import About from './pages/About/About'




function App() {
  return (
    <>
    <Routes>
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<Register />} />
    <Route path="/forgot/password" element={<ForgotPassword />} />
    <Route path="/otp/verify" element={<VerifyOtp />} />
    <Route path="/update/password" element={<UpdatePassword />} />

    <Route path="/user/dashboard" element={<UserDashboard />} />
    <Route path="/user/Course" element={<Course />} />
    <Route path="/about" element={<About />} />

    
    </Routes>

    
    </>
  )
}

export default App
