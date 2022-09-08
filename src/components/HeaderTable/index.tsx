import React,{ReactNode} from 'react'
import { HeaderTable } from './style'

interface IProps {
  children: ReactNode
}
const Header = ({ children } : IProps) => {
  return (
    <HeaderTable>
        {children}
    </HeaderTable>
  )
}

export default Header