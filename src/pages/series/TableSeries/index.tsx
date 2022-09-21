import React from 'react'
import moment from 'moment';
import { Status, Actions } from './style'
import Table from '../../../components/Table'
import HeaderTable from '../../../components/HeaderTable'
import Line from '../../../components/LineTable'
import { IRecord } from '../../../interfaces/record'
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import recordServices from '../../../services/records'
import { RecordContext } from '../../../contexts/records';
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

const icon = (status: boolean) => {
    if (status) return <span style={style(status)}>on</span>
    return <span style={style(status)}>of</span>
}

const TableUsers = () => {
    const { records, setRecords } = React.useContext(RecordContext)
    const deleteRecord = async (id: string) => {
        const newRecords = await recordServices.delete(id)
        setRecords([...newRecords])
    }
    return (
        <>
            <Table>
                <HeaderTable>
                    <tr>
                        <th style={{ width: '23%' }}>NOME</th>
                        <th style={{ width: '16%' }}>REGISTRO</th>
                        <th style={{ width: '23%' }}>Instrutor</th>
                        <th style={{ width: '7%' }}>Exercicios</th>
                        <th style={{ width: '10%' }}>STATUS</th>
                        <th style={{ width: '14%' }}>CRIADO EM</th>
                        <th style={{ width: '8%' }}>ACTIONS</th>
                    </tr>
                </HeaderTable>
                <tbody>
                    {
                       records.map((item: IRecord) => {
                            return (
                                <>
                                    <Line>
                                        <td>{item.user.name}</td>
                                        <td>{item.user.registry}</td>
                                        <td style={{ color: '#4F8DCB' }}>{item.instructor.name}</td>
                                        <td style={{ textAlign: 'center' }}>{item.exercises.length}</td>
                                        <Status>{icon(true)}Active</Status>
                                        <td>{moment(item.created_at).format("DD/MM/YYYY")}</td>
                                        <Actions>
                                            <div>
                                                <span><AiFillEdit /></span>
                                                <span onClick={() => deleteRecord(item._id)}><AiFillDelete /></span>
                                                <span><AiFillEye /></span>
                                            </div>
                                        </Actions>
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