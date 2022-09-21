import React from 'react'
import { RecordContext  } from '../contexts/records'
import recordServices from '../services/records'
const useRecords = () => {

    const { records, setRecords } = React.useContext(RecordContext)
    
    const fetchUsers = async () => {
        const records = await recordServices.get()
        setRecords([...records])
      }
    
      React.useEffect(() => {
        fetchUsers()
      }, [])
      
    return{
        records,
        setRecords,
    }
}

export default useRecords