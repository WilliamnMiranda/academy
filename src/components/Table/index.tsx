import React,{ReactNode} from 'react'
import {Table} from './style'
interface IProps {
    children : ReactNode
}
const TableComponent = ({children}:IProps) => {
  return (
    <Table>
        {children}
    </Table>
  )
}

export default TableComponent