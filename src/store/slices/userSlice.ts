import { createSlice } from "@reduxjs/toolkit";
import {IUser} from '../../interfaces/user'

const initialState : IUser = {
    name: '',
    email: '',
    registry: '',
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState : initialState,
    reducers : {
        login (state,{payload}){
           localStorage.setItem('token',payload.token)
            return{
                ...state,
                name: payload.name,
                registry: payload.registry,
                token: payload.token,
                authenticate: true
            }
        },
        authenticate (state,{payload}){
             return{
                 ...state,
                 name: payload.name,
                 registry: payload.registry,
                 token: payload.token,
                 authenticate: true
             }
         },
         logout (state){
            localStorage.removeItem('token')
            return{
                ...state,
                name: '',
                registry: '',
                token: '',
                authenticate: false
            }
        }
    }
})

export const { login,authenticate,logout } = userSlice.actions

export default userSlice.reducer