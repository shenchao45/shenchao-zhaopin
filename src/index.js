import {createStore} from 'redux'
// 1 新建store
// 通过reducer建立
// 根据老的state和action 生成新的state
function counter(state = 0, action) {
    switch(action.type){
        case '加机关枪':
            return state + 1
        case '减机关枪':
            return state - 1
        default:
            return 10
    }
}
const store = createStore(counter)
const init = store.getState()
console.log(init)

function listener() {
    const current = store.getState()
    console.log(`现在有机枪${current}把`)
}

store.subscribe(listener)

//派发事件
store.dispatch({type:'加机关枪'})
console.log(store.getState())