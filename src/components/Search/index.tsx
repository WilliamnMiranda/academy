import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Container, ButtonAdd,Icon } from './style'
const Search = () => {
  return (
    <Container>
      <Icon>
        <span><AiOutlineSearch /></span>
        <input placeholder='BUSCAR ALUNO' />
      </Icon>
      <ButtonAdd>+</ButtonAdd>
    </Container>
  )
}

export default Search