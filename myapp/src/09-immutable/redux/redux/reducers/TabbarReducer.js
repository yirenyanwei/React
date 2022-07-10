import {fromJS} from 'immutable'
const TabbarReducer = (prevState=fromJS({
    show:true,
}), action)=>{
    switch(action.type){
        case 'hide-tabbar':
            // newState.show = false
            return prevState.set('show', false)
        case 'show-tabbar':
            return prevState.set('show', true)
    }
    return prevState
}
export default TabbarReducer