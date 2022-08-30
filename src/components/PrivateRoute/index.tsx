import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../Layout'
interface IProps {
  children: ReactNode
} 
const PrivateRoute = ({children}:IProps) => {
  const auth = localStorage.getItem('token')
  return auth ? <Layout> {children} </Layout> : <Navigate to="/access" /> 
}

export default PrivateRoute