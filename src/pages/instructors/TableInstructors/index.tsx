import React from 'react'
import { Status, Actions } from './style'
import Table from '../../../components/Table'
import HeaderTable from '../../../components/HeaderTable'
import Line from '../../../components/LineTable'
import { AiOutlineFileAdd, AiFillEdit, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { ModalContext } from '../../../contexts/modal'
import ModalCreateUser from '../../../components/Modal/user'
import { InstructorsContext } from '../../../contexts/instructors'
import useUser from '../../../hooks/useUser'
import { IInstructors } from '../../../interfaces/instructor'


const TableUsers = () => {
    const { instructors } = React.useContext(InstructorsContext)
    console.log(instructors)
    const { deleteUser } = useUser()
    const style = (status: boolean) => {
        return {
            width: '10px',
            height: '10px',
            fontSize: '0.8em',
            borderRadius: '50%',
            backgroundColor: status ? 'green' : 'red',
            color: status ? 'green' : 'red',
            marginRight: '10px'
        }
    }
    const { status } = React.useContext(ModalContext);
    console.log(status)
    const icon = (status: boolean) => {
        if (status) return <span style={style(status)}>on</span>
        return <span style={style(status)}>of</span>
    }
    return (
        <>
            {status && <ModalCreateUser />}
            <Table>
                <HeaderTable>
                    <tr>
                        <th style={{ width: '20%' }}>NOME</th>
                        <th style={{ width: '15%' }}>REGISTRO</th>
                        <th style={{ width: '28%' }}>EMAIL</th>
                        <th style={{ width: '16%' }}>CELULAR</th>
                        <th style={{ width: '12%' }}>STATUS</th>
                        <th style={{ width: '9%' }}>ACTIONS</th>
                    </tr>
                </HeaderTable>
                <tbody>
                    {
                        instructors.map((item: IInstructors) => {
                            return (
                                <>
                                    <Line>
                                        <td>{item.name}</td>
                                        <td>{item.registry}</td>
                                        <td style={{ color: '#4F8DCB' }}>{item.email}</td>
                                        <td>(21) 2059102</td>
                                        <Status>{icon(true)}Active</Status>
                                        <td>
                                            <Actions>
                                                <NavLink to={`/create/record/${item._id}`}>
                                                    <AiOutlineFileAdd />
                                                </NavLink>
                                                <NavLink to={`/user/edit/${item._id}`}>
                                                    <AiFillEdit />
                                                </NavLink>
                                                <AiOutlineClose onClick={() => deleteUser(item._id)} />
                                            </Actions>
                                        </td>
                                    </Line>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TableUsers