import React from 'react'
import TextField from '@mui/material/TextField';
import { ContainerModal, Modal, ContainerFlex,Submit } from './style'
import SelectModal from '../Inputs/select';
import {
  optionsTypeExercises
} from '../../utils/optionsSelect'
import { useExercise } from '../../hooks/useExercise';
import List from './list';
const ModalComponent = () => {
  const {
    repetition, 
    name,
    setName,
    setTypeExercise,
    typeExercise,
    setRepetition,
    setQuantity,
    addExercise,
    exercises,
    quantity
  } = useExercise()
  return (
    <ContainerModal>
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
          <Submit onClick={()=>addExercise()}>ADICIONAR</Submit>
          <List exercises={exercises} />
        </Modal>
    </ContainerModal>
  )
}

export default ModalComponent