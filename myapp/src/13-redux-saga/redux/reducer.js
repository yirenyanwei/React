function reducer(prevState = {
    list1:[]
}, action = {}){
    let newState = {...prevState}
    switch(action.type) {
        case 'changeList':
            newState.list1 = action.payload
            return newState
    }
    return prevState
}
export default reducer