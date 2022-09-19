import React from 'react'
import {Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../pages/access'
import Users from '../pages/users'
import Records from '../pages/series'
import Dashboard from '../pages/dashboard'
import CreateRecord from '../pages/series/create'
import EditProfile from '../pages/profile'
import Intructors from '../pages/instructors'
const RoutesApplication = () => {
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
        <Route path="/create/record/:id" element={
          <PrivateRoute>
            <CreateRecord />
          </PrivateRoute>
        } />
         <Route path="/user/edit/:id" element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        } />
        <Route path="/instructors" element={
          <PrivateRoute>
            <Intructors />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}

export default RoutesApplication