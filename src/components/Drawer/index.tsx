import { NavLink } from 'react-router-dom'
import {
  ContainerDrawer,
  DrawerComponent,
  ListItems,
  Item,
  Messages,
  Quantity,
} from './styles.js'
import {
  AiOutlineLineChart,
  AiOutlineUsergroupDelete,
  AiOutlineFileText,
  AiOutlineFire,
  AiOutlineUser,
  AiOutlineShopping
} from 'react-icons/ai'
const Drawer = () => {
  return (
    <ContainerDrawer>
      <DrawerComponent>
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