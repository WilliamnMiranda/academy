export interface IUser {
    name: string,
    email: string,
    registry: string,
    token: string,
    status: boolean,
    id : string
}

export interface IUserLogin {
    email: string,
    password: string
}