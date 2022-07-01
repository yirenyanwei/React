import React,{useState} from 'react'

export default function App() {
    //useState记忆函数，记住状态
    const [count, setCount] = useState(0)
    var mycount = 0
  return (
    <div>
        <button onClick={()=>{
            setCount(count+1)
            mycount++
        }}>add</button>
        {count}-{mycount}
    </div>
  )
}
