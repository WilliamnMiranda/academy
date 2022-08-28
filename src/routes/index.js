import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Users from '../pages/users'
const index = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="users" element={<Users />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default index