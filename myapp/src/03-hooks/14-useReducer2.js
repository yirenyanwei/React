import React,{useReducer,useContext} from 'react'

const initialState = {
    a: '111',
    b: '222'
}
const reducer = (prevState, action)=>{
    let newState = {...prevState}
    switch(action.type) {
        case 'changeA':
            newState.a = action.value
            return newState
        case 'changeB':
            newState.b = action.value
            return newState
    }
    return prevState
}
const GlobalContext = React.createContext()
export default function App() {
    // useReducer每次都会生成一个新的
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={
        {state,dispatch}
    }>
        <div>
            <Child1></Child1>
            <Child2></Child2>
            <Child3></Child3>
        </div>
    </GlobalContext.Provider>
  )
}

function Child1() {
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div>
            <button onClick={()=>{
                dispatch({
                    type:'changeA',
                    value:'aaaaa'
                })
            }}>change2</button>
            <button onClick={()=>{
                dispatch({
                    type:'changeB',
                    value:'bbbbb'
                })
            }}>change3</button>
        </div>
    )
}

function Child2() {
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div style={{background:'red'}}>
            Child2-{state.a}
        </div>
    )
}

function Child3() {
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div style={{background:'yellow'}}>
            Child3-{state.b}
        </div>
    )
}
