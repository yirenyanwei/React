import {createStore} from 'redux'

const reducer = (prevState={show:true}, action)=>{
    let newState = {...prevState}
    switch(action.type){
        case 'hide-tabbar':
            newState.show = false
            return newState
        case 'show-tabbar':
            newState.show = true
            return newState
    }
    return prevState
}

const store = createStore(reducer)

export default store