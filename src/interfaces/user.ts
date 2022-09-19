export interface IUser {
    name: string,
    email: string,
    registry: string,
    token: string,
    status: boolean,
    _id : string
    created_at?: string
}

export interface IUserLogin {
    email: string,
    password: string
}

export interface IUserCreate {
    name : string,
    email: string,
    password: string,
    registry: number,
}