import Api from '../helpers/api'
import { ICreateRecord } from '../interfaces/record'

const recordServices = {
    get : async ()=> {
       const records  = await (await Api.get('/record/all')).data.records
       return records
    },
    post : async function( record : ICreateRecord){
      await Api.post('/record/create',record)
      const newRecords = this.get()
      return newRecords
    },
    delete : async function(recordId : string){
       try{
        await Api.delete(`/record/${recordId}`)
        const newRecords = this.get()
        return newRecords
       }catch(e){
            return 'a'
       }
     }
}

export default recordServices