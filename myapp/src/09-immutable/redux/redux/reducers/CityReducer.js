import {fromJS} from 'immutable'

const CityReducer = (prevState={
    cityName:'北京'
}, action)=>{
    let newState = fromJS(prevState)
    switch(action.type){
        case 'change-city':
            let res = newState.set('cityName', action.payload)
            return res.toJS()
    }
    return prevState
}
export default CityReducer