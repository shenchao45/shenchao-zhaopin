import React from 'react'
import {Link,Route} from 'react-router-dom'
import App from './App'

function Erying() {
    return <h2>二营</h2>
}

function Qibinglian() {
    return <h2>骑兵连</h2>
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
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
    }
}

export default Dashboard