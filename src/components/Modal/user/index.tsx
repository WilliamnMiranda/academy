import React from 'react'
import Modal from '../index'
import TextField from '@mui/material/TextField';
import useUser from '../../../hooks/useUser';
import Submit from '../../ButtonSubmit';
const ModalCreateUser = () => {
  const { setName, setEmail, setPassword, setRegistry,error,createUser } = useUser()
  return (
    <Modal>
      <TextField
        id="outlined-basic"
        label="Nome "
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        onChange={({ target }) => setName(target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        type='email'
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type='password'
        sx={{ width: '100%', marginBottom: '10px' }}
        onChange={({ target }) => setPassword(target.value)}
      />
      <TextField
        id="outlined-basic"
        label="registry"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        onChange={({ target }) => setRegistry(Number(target.value))}
      />
      {error !== '' && error}
      <Submit action={createUser}>ADICIONAR</Submit>
    </Modal>
  )
}

export default ModalCreateUser