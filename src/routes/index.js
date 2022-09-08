import React from 'react'
import {Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../pages/access'
import Users from '../pages/users'
import Records from '../pages/series'
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
         <Route path="/records" element={
          <PrivateRoute>
            <Records />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}

export default index