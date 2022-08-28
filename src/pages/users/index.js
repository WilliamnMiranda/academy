import React from 'react'
import { useSelector } from 'react-redux'
const Users = () => {
   const name = useSelector((state) => state.user)
  console.log(name)
  return (
    <div>users</div>
  )
}

export default Users