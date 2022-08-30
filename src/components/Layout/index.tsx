import React from 'react'
import Aside from '../Drawer'
import { ContainerLayout, Application, Header, Tittle,Navigation,List,Item,Container } from './styles'
import userServices from '../../services/user';
import { AiOutlineSearch, AiOutlineMail,AiOutlineBell } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Slogan from '../../images/slogan.jpg'
import { logout } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux';
interface IProps {
  children: React.ReactNode
}
const Layout = ({ children }: IProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutUser = () => { 
    dispatch(logout()) 
    navigate('/access')
  }
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
  }, [])

  return (
    <ContainerLayout>
      <Aside />
      <Container>
        <Header>
            <Tittle>tipo</Tittle>
            <Navigation>
                <List>
                  <Item> <AiOutlineSearch /> </Item>
                  <Item> <AiOutlineMail/> </Item>
                  <Item> <AiOutlineBell /> </Item>
                  <Item><Avatar alt="Remy Sharp" src={Slogan} /></Item>
                  <Item onClick={()=> logoutUser()}> <IoMdExit /></Item>
                </List>
            </Navigation>
          </Header>

          <Application>
          {children}
          </Application>
      </Container>
    </ContainerLayout>
  )
}

export default Layout