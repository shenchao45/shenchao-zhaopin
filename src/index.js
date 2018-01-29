import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from 'redux'
import React from 'react'
import {Provider} from 'react-redux'
import reducers from './reducer'
import './config'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import './index.css'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

function Boss() {
    return <h2>Boss页面</h2>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path={'/boss'} component={Boss}></Route>
                <Route path={'/login'} component={Login}></Route>
                <Route path={'/register'} component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'))