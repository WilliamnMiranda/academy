import { ContainerLogin, FormLogin, Slogan,ContainerInput,ButtonLogin} from './style'
import slogan from '../../../images/slogan.jpg'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../types/RootState'

interface IPropsComponents{
  status : 'register' | 'login'
}

const Login = ({ status }:IPropsComponents) => {
  const name = useSelector<RootState>((state) => state.user)
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState()
  return (
      <ContainerLogin status={status}>
        <FormLogin>
          <Slogan><img src={slogan} alt="slogan da academia" /></Slogan>
          <ContainerInput>
            <label>Email</label>
            <input type='text' />
          </ContainerInput>
          <ContainerInput>
            <label>Password</label>
            <input type='password'/>
          </ContainerInput>
          <ButtonLogin> LOGIN </ButtonLogin>
        </FormLogin>
      </ContainerLogin>
  )
}

export default Login