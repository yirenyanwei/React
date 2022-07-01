import React, {useState, useRef} from 'react'

export default function App() {
    const text = useRef('')
    const [list, setList] = useState(['aaa','bbb'])
    var handleClick = ()=>{
        console.log('value',text.current.value)
        let newList = list.slice()
        newList.push(text.current.value)
        setList(newList)
        text.current.value = ''
    }
    var handleDel = (idx)=>{
        let newList = list.slice()
        newList.splice(idx, 1)
        setList(newList)
    }
  return (
    <div>
        <input ref={text}></input>
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
