export interface IUser {
    name: String,
    email: String,
    registry: Number,
    token: String
}

export interface IUserLogin {
    email: String,
    password: String
}