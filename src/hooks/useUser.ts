import { IUser, IUserEdit } from '../interfaces/user';
import userServices from '../services/user';
import React  from 'react';
import { ModalContext } from '../contexts/modal';
import { UsersContext } from '../contexts/users';
import { useNavigate } from "react-router-dom";
const useUser = () => {
  const navigate = useNavigate()
  const { setUsers } = React.useContext(UsersContext)
  const [name,setName] = React.useState<string>('')
  const [email,setEmail] = React.useState<string>('')
  const [password,setPassword] = React.useState<string>('')
  const [registry,setRegistry] = React.useState<number>(0)
  const [error,setError] = React.useState('')
  const { setStatus } = React.useContext(ModalContext)
  const authenticateUser = async (navigate : Function) => {
    const token: any = localStorage.getItem('token')
    if (token) {
      const user = await userServices.auth(token)
      if (!user) {
        navigate('/access')
      }
    }
  }
  
  const updateUsers = (newUsers : IUser[]) => {
    setUsers(newUsers)
  }
  const findUserById = async (userID : string) => {
      const user = await userServices.getUserById(userID)
      return user
  }

  const deleteUser = async (userID : string) => {
    const newUsers = await userServices.delete(userID)
    updateUsers(newUsers)
  }

  const createUser = async () =>{
    if(validationFormUser()){
      const newUsers = await userServices.create({name,email,password,registry})
      resetInfos()
      updateUsers(newUsers)
    }
  }
  const validationFormUser = () => {
    if(email !== '' && name !== '' && password !== '' && registry !== 0){
      return true
    }
    setError('*preencha todos os campos')
    return false
  }
  const edit = async (data : IUserEdit) => {
   try{
    const newUsers = await userServices.edit(data)
    setUsers(newUsers)
    navigate('/')
   }catch(e){

   }
  }
  const resetInfos = () => {
    setName('')
    setEmail('')
    setPassword('')
    setRegistry(0)
    setStatus(false)
  }

  return {
    authenticateUser,
    findUserById,
    setName,setEmail,setPassword,setRegistry,
    error,
    deleteUser,
    createUser,
    name,
    email,
    password,
    registry,
    edit
  }
}


export default useUser