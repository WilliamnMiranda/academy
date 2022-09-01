import React from 'react'
import { IUser } from '../../interfaces/user'
import userServices from '../../services/user'
import TableUsers from './TableUsers'
import Search from '../../components/Search'
const Users = () => {
  const [users, setUsers] = React.useState<IUser[]>([])

  const fetchUsers = async () => {
    const users = await userServices.get()
    setUsers([...users])
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])
  console.log(users)

  return (
    <div>
      <Search />
      <TableUsers users={users} />
    </div>
  )
}

export default Users