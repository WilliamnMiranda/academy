import React,{ReactNode} from 'react'
import { IModalContext } from '../../interfaces/contextModal'

const initalValue = {
    status : false,
    setStatus: () => {}
}
export const ModalContext = React.createContext<IModalContext>(initalValue)

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