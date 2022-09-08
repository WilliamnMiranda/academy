import React from 'react'

export const useExercise = () =>{
  const [typeExercise, setTypeExercise] = React.useState('')
  const [name, setName] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)
  const [repetition, setRepetition] = React.useState(0)
  const [exercises, setExercise] = React.useState<Object[]>([])
  const addExercise = () => {
    const exercise = {
      name,
      quantity,
      repetition,
    }
    if(validationValuesModal()){
        setExercise((previus)=>[...previus,exercise])
        resetValuesModal()
        console.log('entro')
    }
  }

  const resetValuesModal = () => {
    setName('')
    setTypeExercise('')
    setQuantity(0)
    setRepetition(0)
  }

  const validationValuesModal = () => {
    if(name === '' || typeExercise === '' || quantity === 0 || repetition === 0){
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
    addExercise,
    setName,
    setQuantity,
    setRepetition,
    setExercise
  }
}