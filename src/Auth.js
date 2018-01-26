import React from 'react'

import {connect} from 'react-redux'
import {login,logout} from "./Auth.redux";


class Auth extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
       return <h2>Auth page</h2>
    }
}

export default Auth