export interface IRecord {
    _id : string,
    user: {
        name : string,
        email : string,
        registry: number,
    },
    instructor: {
        name : string,
        id: string
    },
    exercises:[],
    created_at : string
}

export interface IUserLogin {
    email: string,
    password: string
}