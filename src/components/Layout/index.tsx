import React from 'react'
import Aside from '../Drawer'
import { ContainerLayout, Application,Container } from './styles'
import userServices from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from '../../contexts/modal';
interface IProps {
  children: React.ReactNode
}
const Layout = ({ children }: IProps) => {
  const navigate = useNavigate()
  const { setStatus } = React.useContext(ModalContext)
  const authenticateUser = async () => {
    const token: any = localStorage.getItem('token')
    if (token) {
      const user = await userServices.auth(token)
      if (!user) {
        navigate('/access')
      }
    }
  }
  React.useEffect(() => {
    authenticateUser()
    setStatus(false)
  }, [])

  return (
    <ContainerLayout>
      <Aside />
      <Container>
          <Application>
          {children}
          </Application>
      </Container>
    </ContainerLayout>
  )
}

export default Layout