import React from 'react';
import {Button,List} from 'antd-mobile'

class App extends React.Component {
    render() {
        const boss = '李云龙'
        return (
            <div>
                <h1>独立团{boss}</h1>
                <一营 老大="张大彪"></一营>
                <骑兵连 老大="孙德胜1"></骑兵连>
            </div>
        )
    }
}

function 骑兵连(props) {
    return <h2>骑兵连连长{props.老大},冲啊</h2>
}

class 一营 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            solders: ['虎子', '柱子', '王根生']
        }
    }

    addSolder(){
        console.log('hello add solder')
        this.setState({
            solders:[...this.state.solders,'新兵蛋子'+Math.random()]
        })
    }

    render() {
        return (<div>
            <h2>一营营长，{this.props.老大}</h2>
            <Button type={'primary'} onClick={this.addSolder.bind(this)}>新兵入伍</Button>
            <List
                renderHeader={()=>'士兵列表'}
            >
                {this.state.solders.map(v => {
                    return <List.Item key={v}>
                        {v}
                    </List.Item>
                })}
            </List>
        </div>)
    }
}

export default App