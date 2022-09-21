import React, { ReactNode } from 'react'
import { UsersStorage } from './users'
import { InstructorsStorage } from './instructors'
import { ModalStorage } from './modal'
import { RecordStorage } from './records'
interface IProps {
  children: ReactNode
}
const Contexts = ({ children }: IProps) => {
  return (
    <RecordStorage>
      <InstructorsStorage>
        <UsersStorage>
          <ModalStorage>
            {children}
          </ModalStorage>
        </UsersStorage>
      </InstructorsStorage>
    </RecordStorage>
  )
}

export default Contexts