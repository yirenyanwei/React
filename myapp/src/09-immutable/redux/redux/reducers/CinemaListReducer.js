const CinemaListReducer = (prevState = {
    list:[]
}, action)=> {
    let newState = {...prevState}
    switch(action.type){
        case 'change-cinemas':
            newState.list = action.payload
            return newState
    }
    return prevState
}
export default CinemaListReducer