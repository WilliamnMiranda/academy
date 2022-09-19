import React from 'react'
import { useParams } from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import { IUser } from '../../../interfaces/user'
import Search from '../../../components/Search'
import { ButtonAddRecord, ContainerRecords } from './style'
import List from './list'
import { useExercise } from '../../../hooks/useExercise'
import Modal from '../../../components/Modal/record'
import { ModalContext } from '../../../contexts/modal'
const CreateRecord = () => {
  const [user, setUser] = React.useState<IUser>()
  const { id } = useParams();
  const { findUserById } = useUser()
  const { exercises, setExercises } = useExercise()
  const { status,setStatus } = React.useContext(ModalContext)
  const findUser = async () => {
    const user = await findUserById(id!)
    setUser(user)
  }

  React.useEffect(() => {
    findUser()
  }, [])

  return (
    <div>
      {status && <Modal action={setExercises}/>}
      <Search config={{ enableSearch: false }} />
      <div style={{marginTop: '110px' }}>
        <ButtonAddRecord onClick={()=> setStatus(true)}> ADICIONAR NOVO EXERCICIO </ButtonAddRecord>
        <ContainerRecords>
          {
            exercises.length > 0 ?
             <List exercises={exercises} userID={user!?._id}/>  : <div>nenhum record</div>
          }
        </ContainerRecords>
      </div>
    </div>
  )
}

export default CreateRecord