//自己实现redux
function createStore(reducer) {
    let list = []
    let state = reducer(undefined,{})
    function subscribe(callback) {
        list.push(callback)
    }
    function dispatch(action) {
        state = reducer(state, action)
        for(let v of list) {
            v&&v()
        }
    }
    function getState() {
        return state
    }
    return {
        subscribe,
        dispatch,
        getState
    }
}
export {createStore}