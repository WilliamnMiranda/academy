import React from 'react'
import { IRecord } from '../interfaces/record'
import recordServices from '../services/records'
const useRecords = () => {

    const [records,setRecords] = React.useState<IRecord[]>([])
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