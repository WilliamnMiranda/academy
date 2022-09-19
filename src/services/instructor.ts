import Api from '../helpers/api'
import { IUser,IUserCreate } from '../interfaces/user'

const instructorServices = {
    get : async () => {
        const users: IUser[] = await (await Api.get('/user')).data
        return users
    },
    getUserById : async (userID : string) => {
        const user: IUser = await (await Api.get(`/user/${userID}`)).data
        return user
    },
    create: async function (user : IUserCreate){
        await Api.post('/user/register',user)
        const newUsers = this.get()
        return newUsers
    },
    delete : async function (userID : string){
        await Api.delete(`/user/${userID}`)
        const newUsers = this.get()
        return newUsers
    }
}

export default instructorServices