import { IUser,IUserLogin } from '../interfaces/user'

const userServices = {
    login : async ({ email,password }: IUserLogin):Promise<IUser> => {
        return {
            email: '',
            name: '',
            registry :12,
            token: ''
        }
    }
}

export default userServices