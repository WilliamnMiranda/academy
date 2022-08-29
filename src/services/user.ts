import Api from '../helpers/api'
import { IUser,IUserLogin } from '../interfaces/user'

const userServices = {
    login : async ({ email,password }: IUserLogin)=> {
       const user : IUser = await (await Api.post('/user/login',{email,password})).data
       return user
    }
}

export default userServices