import React,{ReactNode} from 'react'
import { IInstructors } from '../../interfaces/instructor'
import instructorServices from '../../services/instructor'

interface IPropsContext {
    instructors : IInstructors[],
    setInstructors : React.Dispatch<React.SetStateAction<IInstructors[]>>
}

interface IProps {
    children: ReactNode
}

const initialValue = {
    instructors : [],
    setInstructors : () => {},
}
export const InstructorsContext = React.createContext<IPropsContext>(initialValue)

export const InstructorsStorage = ({children}: IProps) =>{
    const [instructors, setInstructors] = React.useState<IInstructors[]>(initialValue.instructors)
    const fetchUsers = async () => {
        const instructors = await instructorServices.get()
        setInstructors([...instructors])
      }
      
    React.useEffect(() => {
        fetchUsers()
      }, [])
    return (
        <InstructorsContext.Provider value={{instructors,setInstructors}}>
            {children}
        </InstructorsContext.Provider>
    )
}