import React from 'react'
import { Container, ContainerOptions } from './style'
import Login from './login'
import Register from './register'
import { TypeSelectedAccess } from '../../types/Access'
const Access = () => {
  const [option,setOption] = React.useState<TypeSelectedAccess>('login')
  return (
    <>
      <Container>
        <ContainerOptions>
          <Register status={option} setOption={setOption}/>
          <Login status={option} setOption={setOption}/>
        </ContainerOptions>
      </Container>
    </>
  )
}

export default Access