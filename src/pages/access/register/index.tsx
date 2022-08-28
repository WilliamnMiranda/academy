import React from 'react'
import { ContainerLogin, FormLogin ,ContainerInput,ButtonLogin} from './style'

interface IPropsComponents{
  status : 'register' | 'login'
}

const Register = ({ status }:IPropsComponents) => {
  return (
      <ContainerLogin status={status}>
        <FormLogin>
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

export default Register