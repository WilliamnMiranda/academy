import { ContainerLogin, FormLogin, Slogan, ContainerInput, ButtonLogin,CreateAccount } from './style'
import slogan from '../../../images/slogan.jpg'
import React, {SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../types/RootState'
import userServices from '../../../services/user'
import { IUser } from '../../../interfaces/user'
import { login } from '../../../store/slices/userSlice'
import { TypeSelectedAccess }  from '../../../types/Access'
import { useNavigate } from 'react-router-dom'

interface IPropsComponents {
  status: 'register' | 'login'
  setOption : React.Dispatch<SetStateAction<TypeSelectedAccess>>
}

const Login = ({ status,setOption }: IPropsComponents) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const navigate = useNavigate()
  const user = useSelector<RootState>((state) => state.user)
  const dispatch = useDispatch()
  const handleSubmit = async(e:React.FormEvent) =>{
    e.preventDefault()
    const user:IUser = await userServices.login({email,password})
    dispatch(login(user))
    navigate('/')
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
          <label>Senha</label>
          <input
            type='password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </ContainerInput>
        <ButtonLogin> LOGIN </ButtonLogin>
      </FormLogin>
      <CreateAccount onClick={()=> setOption('register')}> Ainda nao tem conta ? <button>cadastre-se</button></CreateAccount>
    </ContainerLogin>
  )
}

export default Login