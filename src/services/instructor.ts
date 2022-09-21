import Api from '../helpers/api'
import { IInstructors} from '../interfaces/instructor'

const instructorServices = {
    login : async ({ email,password }:{email: string,password:string})=> {
        const user : IInstructors = await (await Api.post('/access/login',{email,password})).data
        return user
     },
    get : async () => {
        const instructors: IInstructors[] = await (await Api.get('/instructor')).data
        return instructors
    },
}

export default instructorServices