import React, {SetStateAction } from 'react'
import { ContainerLogin, FormLogin ,ContainerInput,ButtonLogin} from './style'
import { TypeSelectedAccess } from '../../../types/Access'

interface IPropsComponents{
  status : 'register' | 'login',
  setOption : React.Dispatch<SetStateAction<TypeSelectedAccess>>
}

const Register = ({ status,setOption }:IPropsComponents) => {
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