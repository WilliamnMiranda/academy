import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerDrawer, DrawerComponent, ListItems, Item } from './styles.js'
const Drawer = () => {
  return (
    <ContainerDrawer>
      <DrawerComponent>
        <div>William Nascimento</div>
        <ListItems>
          <Link to="/">
            <Item>Dashboard</Item>
          </Link>
          <Link to="/users">
            <Item>Alunos</Item>
          </Link>
          <Link to="/records">
            <Item>Series</Item>
          </Link>
          <Link to="users">
            <Item>Alunos</Item>
          </Link>
        </ListItems>
      </DrawerComponent>
    </ContainerDrawer >
  )
}

export default Drawer