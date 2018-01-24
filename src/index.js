import ReactDom from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {counter,addGUN,removeGUN,addGunAsync} from "./index.redux";
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
function Erying() {
    return <h2>二营</h2>
}

function Qibinglian() {
    return <h2>骑兵连</h2>
}

class Test extends React.Component {
    render (){
        console.log(this.props.match)
        return <h2>通用测试组件</h2>
    }
}
function render() {
    ReactDom.render((
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to={'/'}>一营</Link>
                        </li>
                        <li>
                            <Link to={'/erying'}>二营</Link>
                        </li>
                        <li>
                            <Link to={'/qibinglian'}>骑兵连</Link>
                        </li>
                    </ul>
                    <Switch>
                        {/*只渲染第一个Route*/}
                        <Route exact path={'/'} component={App}></Route>
                        {/*<Route exact path={'/:location'} component={Test}></Route>*/}
                        <Route exact path={'/erying'} component={Erying}></Route>
                        <Route exact path={'/qibinglian'} component={Qibinglian}></Route>
                        {/*<Redirect to={'/Test'}></Redirect>*/}
                        <Route patch={'/:location'} component={Test}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ),document.getElementById('root'))
}
render()
store.subscribe(render)