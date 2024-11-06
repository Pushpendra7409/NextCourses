// import React from 'react'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'
import UpdatePassword from './auth/UpdatePassword'
import VerifyOtp from './auth/VerifyOtp'
import UserDashboard from './pages/UserDashboard/UserDashboard'


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
    
    </Routes>

    
    </>
  )
}

export default App
