import React from 'react'
import {Container,ContainerButtons,Button} from './style' 
import TextField from '@mui/material/TextField';
import useUser from '../../hooks/useUser';
import { useParams } from 'react-router-dom';
import { IUser } from '../../interfaces/user'
import moment from 'moment';
const EditProfile = () => {
  const {
    setName,
    findUserById,
    setEmail,
    setRegistry,
    name,
    email,
    registry
  } = useUser()
  const [user,setUser] = React.useState<IUser>()
  const { id } = useParams()
  const getUser = async () => {
    const user = await findUserById(id!)
    setUser(user)
    setName(user?.name)
    setEmail(user?.email)
    setRegistry(Number(user?.registry))
  }
  const date = moment(user?.created_at).format("DD/MM/YYYY");
  const { edit } = useUser()
  const data = {
    name,
    email,
    id,
    registry
  }
  React.useEffect(()=>{
    getUser()
  },[])
  return (
    <Container>
       <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        onChange={({ target }) => setName(target.value)}
        value={name}
        helperText="Nome do usuario"
      />
       <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        onChange={({ target }) => setEmail(target.value)}
        value={email}
        helperText="Email do usuario"
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        onChange={({ target }) => setRegistry(Number(target.value))}
        value={registry}
        helperText="Registro do usuario"
      />
       <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        value={user?.status ? ' Ativo ' : 'Inativo'}
        helperText="Status do usuario"
        disabled
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        helperText="Data de criacao"
        value={date}
        disabled
      />
      <TextField
        id="outlined-basic"
        label={`${user?._id}`}
        variant="outlined"
        sx={{ width: '100%', marginBottom: '10px' }}
        disabled
        helperText="ID User"
      />
      <ContainerButtons>
        <Button bg={'#3CB371'} onClick={()=>edit(data)}> SALVAR </Button>
        <Button bg={'#A52A2A'}> DELETAR </Button>
      </ContainerButtons>
    </Container>
  )
}

export default EditProfile