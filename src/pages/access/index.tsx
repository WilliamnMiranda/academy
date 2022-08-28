import React from 'react'
import { Container,ContainerOptions } from './style'
import Login from './login'
import Register from './register'

type TypeSelectedAccess = 'register' | 'login';

const Access = () => {
  const status : TypeSelectedAccess = 'login';
  return (
    <Container>
      <ContainerOptions>
        <Register status={status} />
        <Login status={status}/>
      </ContainerOptions>
    </Container>
  )
}

export default Access