import React, { ReactNode } from 'react'
import {UsersStorage} from '../contexts/users'
import { ModalStorage } from './modal'
interface IProps {
  children: ReactNode
}
const Contexts = ({ children }: IProps) => {
  return (
    <UsersStorage>
      <ModalStorage>
        {children}
      </ModalStorage>
    </UsersStorage>
  )
}

export default Contexts