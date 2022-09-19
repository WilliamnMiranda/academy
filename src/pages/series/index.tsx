import React from 'react'
import TableSeries from './TableSeries'
import Search from '../../components/Search'
const Records = () => {
  const addUser = () => {
  }
  return (
    <div>
      <Search action={()=> addUser}/>
      <TableSeries  />
    </div>
  )
}

export default Records