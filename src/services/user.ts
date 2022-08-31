import Api from '../helpers/api'
import { IUser,IUserLogin } from '../interfaces/user'

const userServices = {
    login : async ({ email,password }: IUserLogin)=> {
       const user : IUser = await (await Api.post('/user/login',{email,password})).data
       return user
    },
    auth : async (token:string) => {
        const userAuthenticate : IUser = await (await Api.post('/user/auth',{token})).data
        console.log(userAuthenticate)
        return userAuthenticate
    }, 
    get : async () => {
        const users: IUser[] = await (await Api.get('/user')).data
        return users
    }
}

export default userServices