import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const initState = {
    isAuth: false,
    name: '李云龙',
    age: 20
}

export function auth(state = initState, action) {
    console.log(state, action)
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true}
            break
        case LOGOUT:
            return {...state, isAuth: false}
            break
        case USER_DATA:
            return {...state,user:action.payload.name,age:action.payload.age}
        default:
            return state
    }
}

//action
export function login() {
    return {type: LOGIN}
}

export function logout() {
    return {type: LOGOUT}
}

export function getUserData() {
    //dispatch 来通知数据修改
    return dispath => {
        axios.get('/data').then(res => {
            console.log(res)
            if (res.status == 200) {
                dispath(userData(res.data))
                // this.setState(userData(res.data))
            }
        })
    }
}

export function userData(data) {
    return {type: USER_DATA, payload: data}
}