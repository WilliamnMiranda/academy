import TextField from '@mui/material/TextField';
import {ContainerFlex,Submit} from './style'
import SelectModal from '../../Inputs/select';
import {
  optionsTypeExercises
} from '../../../utils/optionsSelect'
import { useExercise } from '../../../hooks/useExercise';
import Modal from '../index'
import { IExercise } from '../../../types/Exercise';
import { SetStateAction } from 'react'
interface IProps { 
  action : React.Dispatch<SetStateAction<IExercise[]>>
}
const ModalComponent = ({action} : IProps) => {
  const {
    repetition, 
    name,
    setName,
    setTypeExercise,
    typeExercise,
    setRepetition,
    setQuantity,
    quantity,
    resetValuesModal,
    error,
    validationValuesModal
  } = useExercise()
  const add = () =>{
    if(validationValuesModal()){
      const exercise = {
        name,
        typeExercise,
        repetition,
        quantity,
      }
      action((previus)=>[...previus,exercise])
      resetValuesModal()
    }
  }
  return (
        <Modal>
          <TextField
            id="outlined-basic"
            label="Nome do exercicio"
            variant="outlined"
            value={name}
            sx={{ width: '100%', marginBottom: '10px' }}
            helperText={name === '' && "Digite o nome do exercicio"}
            onChange={({ target }) => setName(target.value)}
          />
          <ContainerFlex>
            <SelectModal
              setItem={setTypeExercise}
              options={optionsTypeExercises}
              value={typeExercise}
              helper="Tipo exercicio"
            />
            <TextField
              id="outlined-number"
              label="Repeticoes"
              type="number"
              value={repetition}
              onChange={(event) => setRepetition(Number(event.target.value))}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="quantidade"
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ContainerFlex>
          <p>{error}</p>
          <Submit onClick={()=> add()}>ADICIONAR</Submit>
        </Modal>
  )
}

export default ModalComponent