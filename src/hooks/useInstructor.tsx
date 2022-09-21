import React  from 'react';
import { InstructorsContext } from '../contexts/instructors';
import instructorServices from '../services/instructor';
import { IInstructors } from '../interfaces/instructor';
const useInstructor = () => {
    const { setInstructors } = React.useContext(InstructorsContext)


    const updateUsers = (newUsers : IInstructors[]) => {
        setInstructors(newUsers)
      }
    

      return { 
       
      }
}


export default useInstructor