import React,{ReactNode} from 'react'
import { IUser } from '../../interfaces/user'
import userServices from '../../services/user'

interface IPropsContext {
    users : IUser[],
    setUsers : React.Dispatch<React.SetStateAction<IUser[]>>
}

interface IProps {
    children: ReactNode
}

const initialValue = {
    users : [],
    setUsers : () => {},
}
export const UsersContext = React.createContext<IPropsContext>(initialValue)

export const UsersStorage = ({children}: IProps) =>{
    const [users, setUsers] = React.useState<IUser[]>(initialValue.users)
    const fetchUsers = async () => {
        const users = await userServices.get()
        setUsers([...users])
      }
      
    React.useEffect(() => {
        fetchUsers()
      }, [])
    return (
        <UsersContext.Provider value={{users,setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}