import React from 'react'
import { Container, ButtonAdd, Icon, Header, Tittle, Navigation, List, Item, ContainerSearch } from './style'
import { MdOutlineAdd } from 'react-icons/md'
import { ModalContext } from '../../contexts/modal';
import { AiOutlineSearch, AiOutlineMail, AiOutlineBell } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import Slogan from '../../images/slogan.jpg'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom';

interface IProps {
  action?: () => void
  config?: {
    enableSearch: boolean
  }
}
const Search = ({ action, config }: IProps) => {
  const { setStatus } = React.useContext(ModalContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutUser = () => {
    dispatch(logout())
    navigate('/access')
  }
  return (
    <Container>
      <Header>
        <Tittle>tipo</Tittle>
        <Navigation>
          <List>
            <Item> <AiOutlineSearch /> </Item>
            <Item> <AiOutlineMail /> </Item>
            <Item> <AiOutlineBell /> </Item>
            <Item><Avatar alt="Remy Sharp" src={Slogan} /></Item>
            <Item onClick={() => logoutUser()}> <IoMdExit /></Item>
          </List>
        </Navigation>
      </Header>
      {
      !config && (
          <ContainerSearch>
            <Icon>
              <span><AiOutlineSearch /></span>
              <input placeholder='BUSCAR ALUNO' />
            </Icon>
            <ButtonAdd onClick={() => setStatus(true)}> <MdOutlineAdd /> </ButtonAdd>
          </ContainerSearch>
        )
      }
    </Container>
  )
}

export default Search