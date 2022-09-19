import React, {ReactNode,Dispatch,SetStateAction} from 'react'
import { IUser } from '../../interfaces/user'
import { Submit } from './style'

interface IProps {
    children : ReactNode
    action?: Dispatch<SetStateAction<IUser>>
}
const ButtonSubmit = ({ children,action } : IProps) => {
  return (
    <Submit onClick={action}>{children}</Submit>
  )
}

export default ButtonSubmit