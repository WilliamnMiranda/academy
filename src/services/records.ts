import Api from '../helpers/api'
import { ICreateRecord } from '../interfaces/record'

const recordServices = {
    get : async ()=> {
       const records  = await (await Api.get('/record/all')).data.records
       return records
    },
    post : async function( record : ICreateRecord){
      console.log(record)
      await Api.post('/record/create',record)
    },
    delete : async function(recordId : string){
       try{
        await await Api.delete(`/record/${recordId}`)
        const newRecords = this.get()
        console.log(newRecords)
        return newRecords
       }catch(e){
            return 'a'
       }
     }
}

export default recordServices