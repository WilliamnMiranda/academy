import React,{ReactNode} from 'react'
import { IModalContext } from '../interfaces/contextModal'
export const ModalContext = React.createContext<IModalContext | null>(null)


interface IProps {
    children:ReactNode
}
export const ModalStorage = ({children}: IProps) =>{
    const [status,setStatus] = React.useState(false);
    return (
        <ModalContext.Provider value={{status,setStatus}}>
            {children}
        </ModalContext.Provider>
    )
}