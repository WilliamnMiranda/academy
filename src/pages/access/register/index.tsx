import React, { SetStateAction } from 'react'
import { ContainerLogin, FormLogin, ContainerInput, ButtonLogin,CreateAccount } from './style'
import { TypeSelectedAccess } from '../../../types/Access'

interface IPropsComponents {
  status: 'register' | 'login',
  setOption: React.Dispatch<SetStateAction<TypeSelectedAccess>>
}

const Register = ({ status, setOption }: IPropsComponents) => {
  return (
    <ContainerLogin status={status}>
      <FormLogin>
        <ContainerInput>
          <label>Nome</label>
          <input type='text' />
        </ContainerInput>
        <ContainerInput>
          <label>Email</label>
          <input type='text' />
        </ContainerInput>
        <ContainerInput>
          <label>Senha</label>
          <input type='password' />
        </ContainerInput>
        <ContainerInput>
          <label>Registro</label>
          <input type='text' />
        </ContainerInput>
        <ButtonLogin> LOGIN </ButtonLogin>
      </FormLogin>
      <CreateAccount onClick={()=> setOption('login')}> Ja tem um conta ? LOGIN </CreateAccount>
    </ContainerLogin>
  )
}

export default Register