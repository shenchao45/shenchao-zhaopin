import React from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import App from './App'
import {connect} from 'react-redux'
import {login,logout} from "./Auth.redux";

function Erying() {
    return <h2>二营</h2>
}

function Qibinglian() {
    return <h2>骑兵连</h2>
}
@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        const redirectToLogin = <Redirect to={'/login'}></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                {this.props.isAuth  ? <button onClick={this.props.logout}>注销</button>:null}
                <ul>
                    <li>
                        <Link  to={'/dashboard/'}>一营</Link>
                    </li>
                    <li>
                        <Link  to={'/dashboard/erying'}>二营</Link>
                    </li>
                    <li>
                        <Link  to={'/dashboard/qibinglian'}>骑兵连</Link>
                    </li>
                </ul>
                <Route exact path={'/dashboard/'} component={App}></Route>
                <Route exact path={'/dashboard/erying'} component={Erying}></Route>
                <Route exact path={'/dashboard/qibinglian'} component={Qibinglian}></Route>
            </div>
        )
        return this.props.isAuth ? app:redirectToLogin
    }
}

export default Dashboard