import Api from '../helpers/api'

const recordServices = {
    get : async ()=> {
       const records  = await (await Api.get('/record/all')).data.records
       return records
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