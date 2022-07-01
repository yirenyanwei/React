import React,{useReducer} from 'react'
//处理函数
const reducer = (prevState, action)=>{
    console.log(prevState, action)
    //复制一份，真垃圾
    let newState = {...prevState}
    switch(action.type){
        case 'minus':
            newState.count--
            break
        case 'add':
            newState.count++
            break
        default:
            return prevState
    }
    return newState
}
//外部对象
const initialState = {
    count: 0,
}

export default function App() {
    //返回状态和方法
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <button onClick={()=>{
            dispatch({
                //固定格式type
                type: 'minus'
            })
        }}>-</button>
        {state.count}
        <button onClick={()=>{
            dispatch({type: 'add'})
        }}>+</button>
    </div>
  )
}
