import React from 'react'
import {connect} from 'react-redux'
import {addGUN, removeGUN, addGunAsync} from "./index.redux";

@connect(state=>state, {addGUN, removeGUN, addGunAsync})
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const num = this.props.counter
        return (
            <div>
                <h1>现在有机枪{num}</h1>
                <button onClick={this.props.addGUN}>申请武器</button>
                <button onClick={this.props.removeGUN}>减少武器</button>
                <button onClick={this.props.addGunAsync}>过两天给武器</button>
            </div>
        )
    }
}

export default App