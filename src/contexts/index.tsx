import React, { ReactNode } from 'react'
import { UsersStorage } from '../contexts/users'
import { InstructorsStorage } from './instructors'
import { ModalStorage } from './modal'
interface IProps {
  children: ReactNode
}
const Contexts = ({ children }: IProps) => {
  return (
    <InstructorsStorage>
      <UsersStorage>
        <ModalStorage>
          {children}
        </ModalStorage>
      </UsersStorage>
    </InstructorsStorage>
  )
}

export default Contexts