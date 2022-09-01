import { Icon } from '@mui/material'
import { IUser } from '../../../interfaces/user'
import { Status } from './style'
import Table from '../../../components/Table'
import HeaderTable from '../../../components/HeaderTable'
import Line from '../../../components/LineTable'

interface IProps{
    users: IUser[]
}

const TableUsers = ({users}:IProps) => {
    const style = (status: boolean) => {
        return {
            width : '10px',
            height: '10px',
            fontSize: '0.8em',
            borderRadius: '50%',
            backgroundColor: status ? 'green' : 'red',
            color: status ? 'green' : 'red',
            marginRight: '10px'
        }
    }
    const icon = (status : boolean) => {
        if(status) return <span style={style(status)}>on</span>
        return <span style={style(status)}>of</span>
    } 
    return (
        <Table>
            <HeaderTable>
                <tr>
                    <th style={{width: '20%'}}>NOME</th>
                    <th style={{width: '15%'}}>REGISTRO</th>
                    <th style={{width: '28%'}}>EMAIL</th>
                    <th style={{width: '16%'}}>CELULAR</th>
                    <th style={{width: '12%'}}>STATUS</th>
                    <th style={{width: '9%'}}>ACTIONS</th>
                </tr>
            </HeaderTable>
            <tbody>
                {
                    users.map((item:IUser)=>{
                        return (
                            <>
                                <Line>
                                    <td>{item.name}</td>
                                    <td>{item.registry}</td>
                                    <td style={{color: '#4F8DCB'}}>{item.email}</td>
                                    <td>(21) 2059102</td>
                                    <Status>{icon(true)}Active</Status>
                                    <td>actions</td>
                                </Line>
                            </>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default TableUsers