import React,{ReactNode} from 'react'
import { ContainerModal,Modal,ButtonClose} from './style'
import { AiOutlineClose }  from  "react-icons/ai";
import { ModalContext } from '../../contexts/modal';
interface IProps {
  children : ReactNode
  action?: (e : React.FormEvent) => void  
}
const ModalComponent = ({ action,children } : IProps) => {
  const { setStatus } = React.useContext(ModalContext)
  return (
    <ContainerModal>
        <Modal onSubmit={action}>
          <ButtonClose>
            <AiOutlineClose onClick={()=> setStatus(false)} />
          </ButtonClose>
          { children }
        </Modal>
    </ContainerModal>      
  )
}

export default ModalComponent