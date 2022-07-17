import {createStore} from 'redux'
//action 接口
interface IAction {
    type:string,
    payload?:any
}
interface IState{
    isShow:boolean
}
function reducer(prevState:IState = {
    isShow:true
}, action:IAction) {
    let {type} = action
    let newState = {...prevState}
    switch(type) {
        case 'show':
            newState.isShow = true
            return newState
        case 'hide':
            newState.isShow = false
            return newState
    }
    return prevState
}
let store = createStore(reducer)
export default store