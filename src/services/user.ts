import Api from '../helpers/api'
import { IUser,IUserLogin } from '../interfaces/user'

const userServices = {
    login : async ({ email,password }: IUserLogin)=> {
       const user : IUser = await (await Api.post('/user/login',{email,password})).data
       return user
    },
    auth : async (token:String) => {
        const userAuthenticate : IUser = await (await Api.post('/user/auth',{token})).data
        console.log(userAuthenticate)
        return userAuthenticate
    } 
}

export default userServices