function reducer(prevState = {
    list1:[],
    list2:[],
}, action = {}){
    let newState = {...prevState}
    switch(action.type) {
        case 'changeList1':
            newState.list1 = action.payload
            return newState
        case 'changeList2':
            newState.list2 = action.payload
            return newState
    }
    return prevState
}
export default reducer