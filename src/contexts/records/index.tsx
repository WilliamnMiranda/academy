import React,{ReactNode} from 'react'
import { IRecord } from '../../interfaces/record'
import recordServices from '../../services/records'

interface IPropsContext {
    records : IRecord[],
    setRecords : React.Dispatch<React.SetStateAction<IRecord[]>>
}

interface IProps {
    children: ReactNode
}

const initialValue = {
    records : [],
    setRecords : () => {},
}
export const RecordContext = React.createContext<IPropsContext>(initialValue)

export const RecordStorage = ({children}: IProps) =>{
    const [records, setRecords] = React.useState<IRecord[]>(initialValue.records)
    const fetchRecords = async () => {
        const users = await recordServices.get()
        setRecords([...users])
      }
      
    React.useEffect(() => {
        fetchRecords()
      }, [])
    return (
        <RecordContext.Provider value={{records,setRecords}}>
            {children}
        </RecordContext.Provider>
    )
}