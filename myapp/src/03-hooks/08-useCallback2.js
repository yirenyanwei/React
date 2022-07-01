import React, {useState, useCallback} from 'react'

export default function App() {
    const [text, setText] = useState('')
    const [list, setList] = useState(['aaa','bbb'])
    var handleChange = (evt)=>{
        setText(evt.target.value)
    }
    var handleClick = useCallback(()=>{
        //函数体
        console.log('value',text)
        let newList = list.slice()
        newList.push(text)
        setList(newList)
        setText('')
    }, [text,list])//变量发生变化就会重新创建函数
    var handleDel = useCallback((idx)=>{
        let newList = list.slice()
        newList.splice(idx, 1)
        setList(newList)
    }, [list])
  return (
    <div>
        <input onChange={handleChange} value={text}></input>
        <button onClick={handleClick}>add</button>
        <ul>
            {list.map((item,idx)=>
                <li key={item}>{item}
                    <button onClick={()=>handleDel(idx)}>del</button>
                </li>
            )}
        </ul>
        {list.length<=0&&<div>暂无代办</div>}
    </div>
  )
}
