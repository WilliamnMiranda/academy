import React from 'react'
import Aside from '../Drawer'
import { ContainerLayout,Application } from './styles'
interface IProps {
    children : React.ReactNode
}

const Layout = ({ children} : IProps) => {
  return (
    <ContainerLayout>
      <Aside />
      <Application>{children}</Application>
    </ContainerLayout>
  )
}

export default Layout