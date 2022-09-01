import React,{ReactNode} from 'react'
import { Line } from './style'
interface IProps {
    children : ReactNode
}

const LineTable = ({children}:IProps) => {
  return (
    <Line>{children}</Line>
  )
}

export default LineTable