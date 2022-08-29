import axios from 'axios'
console.log('chamo')
const Api = axios.create({
    baseURL : 'http://localhost:8081',
    headers: {
        'x-access-token' : localStorage.getItem('token')
    }
})

export default Api