import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../pages/access'
import Users from '../pages/users'
import Dashboard from '../pages/dashboard'
const index = () => {
  return (
    <>
      <Routes>
        <Route path='access' element={<Login />} />
        <Route path="/" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/users" element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}

export default index