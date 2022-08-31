import React from 'react'
import { IUser } from '../../interfaces/user'
import userServices from '../../services/user'
import TableUsers from '../../components/TableUsers'
const Users = () => {
  const [users, setUsers] = React.useState<IUser[]>([])

  const fetchUsers = async () => {
    const users = await userServices.get()
    setUsers(users)
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])


  return (
    <div>
      <TableUsers users={users} />
    </div>
  )
}

export default Users