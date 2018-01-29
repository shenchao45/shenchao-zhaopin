import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
export default class AuthRoute extends React.Component {

    componentDidMount() {
        const publicList = ['/login', '/register']
        if (publicList.indexOf(this.props.location.pathname) > -1) {
            return null
        }
        //获取用户信息
        axios.get('/user/info').then(res => {
            if (res.status == 200) {
                if (res.data.code == 0) {
                    //有登录信息的
                } else {
                    this.props.history.push('/login')
                }
            }
        })
        //是否登录
        //现在的url地址  login是不需要跳转
        //用户的type 身份是boss还是牛人
        //用户是否完善信息
        //用户是否完善信息(选择头像 个人简介)
    }

    render() {
        return null
    }
}
