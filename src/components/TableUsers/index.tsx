import React, { ReactNode } from 'react'
import { IUser } from '../../interfaces/user'
import { Table, HeaderTable } from './style'

interface IProps {
    users: IUser[]
}

const TableUsers = (users:IProps) => {
    return (
        <Table>
            <HeaderTable>
                <tr>
                    <th style={{width: '20%'}}>NOME</th>
                    <th style={{width: '11%'}}>REGISTRO</th>
                    <th style={{width: '36%'}}>EMAIL</th>
                    <th style={{width: '14%'}}>CELULAR</th>
                    <th style={{width: '10%'}}>STATUS</th>
                    <th style={{width: '9%'}}>ACTIONS</th>
                </tr>
            </HeaderTable>
            <tbody>

            </tbody>
        </Table>
    )
}

export default TableUsers