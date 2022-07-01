import React, {useEffect,useState} from 'react'

export default function App() {
    const [name, setName] = useState('yanwei')
    //第一次会执行，之后依赖改变也会执行
    useEffect(()=>{
        setName(name.substring(0,1).toUpperCase()+name.substring(1))
    }, [name])
  return (
    <div>
        App-{name}
        <button onClick={()=>{
            setName('xiaoming')
        }}>change</button>
    </div>
  )
}
