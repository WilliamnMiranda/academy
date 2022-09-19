import React from 'react'
import { ModalContext } from '../contexts/modal'
import { IExercise } from '../types/Exercise'

export const useExercise = () =>{
  const [typeExercise, setTypeExercise] = React.useState('')
  const [name, setName] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)
  const [repetition, setRepetition] = React.useState(0)
  const [exercises, setExercises] = React.useState<IExercise[]>([])
  const { setStatus } = React.useContext(ModalContext)
  const [error,setError] = React.useState('')

  const resetValuesModal = () => {
    setName('')
    setTypeExercise('')
    setQuantity(0)
    setRepetition(0)
    setStatus(false)
  }

  const validationValuesModal = () => {
    if(name === '' || typeExercise === '' || quantity === 0 || repetition === 0){
      setError('preencha todos os campos')
      return false
    }
        return true
  }

  return {
    typeExercise,
    setTypeExercise,
    name,
    quantity,
    repetition,
    exercises,
    validationValuesModal,
    setName,
    setQuantity,
    setRepetition,
    setExercises,
    error,
    resetValuesModal
  }
}