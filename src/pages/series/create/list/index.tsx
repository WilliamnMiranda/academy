import React from 'react'
import { Table } from '../../../../components/Table/style'
import HeaderTable from '../../../../components/HeaderTable'
import Line from '../../../../components/LineTable'
import { IExercise } from '../../../../types/Exercise'
import { ButtonSubmit } from './style'
import recordServices  from '../../../../services/records'
import { ICreateRecord } from '../../../../interfaces/record'
import { ModalContext } from '../../../../contexts/modal'
import { useNavigate } from 'react-router-dom'
import { RecordContext } from '../../../../contexts/records'
interface IProps {
  exercises: IExercise[]
  userID : string
}
const List = ({ exercises, userID }: IProps) => {
  const { setStatus } = React.useContext(ModalContext); 
  const { setRecords } = React.useContext(RecordContext); 
  const navigate = useNavigate()
  const createRecord = async () => {
    const data:ICreateRecord = {
      userID, 
      exercises,
    }
    const newRecords = await recordServices.post(data)
    setRecords([...newRecords])
    setStatus(false)
    navigate('/records')
  }
  return (
    <div style={{ marginTop: '10px', overflowY: 'auto', height: '98%'}}>
      <Table>
        <HeaderTable>
          <tr>
            <th style={{ width: '50%' }}>NOME</th>
            <th style={{ width: '30%' }}>TIPO</th>
            <th style={{ width: '10%' }}>QUANTIDADE</th>
            <th style={{ width: '10%' }}>REPETICOES</th>
          </tr>
        </HeaderTable>
      <tbody>
        {exercises.map((item) => (
            <Line>
              <td>{item.name}</td>
              <td>{item.typeExercise}</td>
              <td>{item.quantity}</td>
              <td>{item.repetition}</td>
            </Line>
        ))}
      </tbody>
      </Table>
      <ButtonSubmit onClick={createRecord}>CRIAR</ButtonSubmit>
    </div>
  )
}

export default List