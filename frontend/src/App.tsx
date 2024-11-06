// import React from 'react'
import Login from './auth/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './auth/Register'


function App() {
  return (
    <>
    <Routes>
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<Register />} />
    </Routes>
    </>
  )
}

export default App
