import Api from '../helpers/api'
import { IUser,IUserCreate,IUserLogin } from '../interfaces/user'

const userServices = {
    login : async ({ email,password }: IUserLogin)=> {
       const user : IUser = await (await Api.post('/user/login',{email,password})).data
       return user
    },
    auth : async (token:string) => {
        try{
            const userAuthenticate : IUser = await (await Api.post('/user/auth',{token})).data
            return userAuthenticate
        }catch(error){localStorage.removeItem('token')}
    }, 
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
    },
    edit: async function (data : IUserCreate){
       await Api.patch('/user/edit',data)
       const newUsers = this.get()
       return newUsers
    },
}

export default userServices