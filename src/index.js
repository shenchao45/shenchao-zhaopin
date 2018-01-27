import ReactDom from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './reducer'
import './config'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

function render() {
    ReactDom.render(
        <Provider store={store}>
            <BrowserRouter>
                    <Switch>
                        <Route path={'/login'} component={Auth}></Route>
                        <Route path={'/dashboard'} component={Dashboard}></Route>
                        <Redirect to={'/dashboard'}></Redirect>
                    </Switch>
            </BrowserRouter>
        </Provider>,document.getElementById('root'))
}
render()