import React,{ReactNode} from 'react'
import { HeaderTable } from './style'
const Header = (children : ReactNode) => {
  return (
    <HeaderTable>
        {children}
    </HeaderTable>
  )
}

export default HeaderTable