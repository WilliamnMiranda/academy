import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  ContainerDrawer,
  DrawerComponent,
  ListItems,
  Item,
  Messages,
  Quantity,
  MenuIcon
} from './styles.js'
import {
  AiOutlineUsergroupDelete,
  AiOutlineFileText,
  AiOutlineFire,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineMenu
} from 'react-icons/ai'
const Drawer = () => {
  React.useEffect(()=>{
    setStatusDrawer(false)
  },[window.location.href])
  const [statusDrawer,setStatusDrawer] = React.useState<boolean>(false);
  return (
    <ContainerDrawer>
      <MenuIcon>
         <AiOutlineMenu onClick={()=> setStatusDrawer((previusValue)=> !previusValue)} />
      </MenuIcon>
      <DrawerComponent status={statusDrawer}>
        <ListItems>
          <Messages>
            <div>
              <Quantity> 21 </Quantity>
              New Orders
            </div>
          </Messages>
          <NavLink to="/" >
            <Item>
              <AiOutlineUsergroupDelete />
              Alunos
            </Item>
          </NavLink>
          <NavLink to="/records">
            <Item>
              <AiOutlineFileText />
              Series
            </Item>
          </NavLink>
          <NavLink to="/instructors">
            <Item>
              <AiOutlineUser />
              Instrutores
            </Item>
          </NavLink>
          <NavLink to="/records">
            <Item>
              <AiOutlineFire />
              Promoçôes
            </Item>
          </NavLink>
          <NavLink to="/records">
            <Item>
              <AiOutlineShopping />
              Store
            </Item>
          </NavLink>
        </ListItems>
      </DrawerComponent>
    </ContainerDrawer >
  )
}

export default Drawer