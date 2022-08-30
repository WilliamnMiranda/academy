export interface IUser {
    name: string,
    email: string,
    registry: Number,
    token: string
}

export interface IUserLogin {
    email: string,
    password: string
}