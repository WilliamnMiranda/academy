import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Container, ButtonAdd,Icon } from './style'
import { MdOutlineAdd } from 'react-icons/md'
const Search = () => {
  return (
    <Container>
      <Icon>
        <span><AiOutlineSearch /></span>
        <input placeholder='BUSCAR ALUNO' />
      </Icon>
      <ButtonAdd> <MdOutlineAdd /> </ButtonAdd>
    </Container>
  )
}

export default Search