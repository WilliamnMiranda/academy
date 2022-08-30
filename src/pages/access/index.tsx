import React from 'react'
import { Container, ContainerOptions } from './style'
import Login from './login'
import Register from './register'
import { TypeSelectedAccess } from '../../types/Access'
import { useDispatch } from 'react-redux'
import { authenticate } from '../../store/slices/userSlice'
import userServices from '../../services/user';
import { useNavigate } from 'react-router-dom';

const Access = () => {
  const [option,setOption] = React.useState<TypeSelectedAccess>('login')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticateUser = async () => {
    const token: any = localStorage.getItem('token')
    if (token) {
      const user = await userServices.auth(token)
      if (user) {
        dispatch(authenticate({ user, token }))
        navigate('/')
      }
    }
  }
  React.useEffect(()=>{authenticateUser()},[])

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