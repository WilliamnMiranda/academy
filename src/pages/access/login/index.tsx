import { ContainerLogin, FormLogin, Slogan, ContainerInput, ButtonLogin,CreateAccount } from './style'
import slogan from '../../../images/slogan.jpg'
import React, {SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../types/RootState'
import userServices from '../../../services/user'
import { IUser } from '../../../interfaces/user'
import { login } from '../../../store/slices/userSlice'
import { TypeSelectedAccess }  from '../../../types/Access'

interface IPropsComponents {
  status: 'register' | 'login'
  setOption : React.Dispatch<SetStateAction<TypeSelectedAccess>>
}

const Login = ({ status,setOption }: IPropsComponents) => {
  const { token } : any = useSelector<RootState>((state) => state.user)
  const [email, setEmail] = React.useState<String>('');
  const [password, setPassword] = React.useState<String>('');
  const dispatch = useDispatch()
  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault()
    const user:IUser = await userServices.login({email,password})
    dispatch(login(user))
    localStorage.setItem('token',token)
  }
  return (
    <ContainerLogin status={status}>
      <FormLogin onSubmit={handleSubmit}>
        <Slogan><img src={slogan} alt="slogan da academia" /></Slogan>
        <ContainerInput>
          <label>Email</label>
          <input
            type='text'
            onChange={({ target }) => setEmail(target.value)}
          />
        </ContainerInput>
        <ContainerInput>
          <label>Password</label>
          <input
            type='password'
            onChange={({ target }) => setPassword(target.value)}
          />
          {password}
        </ContainerInput>
        <ButtonLogin> LOGIN </ButtonLogin>
      </FormLogin>
      <CreateAccount onClick={()=> setOption('register')}> Ainda nao tem conta ? <button>cadastre-se</button></CreateAccount>
    </ContainerLogin>
  )
}

export default Login