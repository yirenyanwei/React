import React, {useState} from 'react'

export default function App() {
    const [name, setName] = useState('yanwei')
    const [age, setAge] = useState(100)
  return (
    <div>
        <button onClick={()=>{
            setName('xiaoming')
            setAge(18)
        }}>change</button>
        {name}-{age}
    </div>
  )
}
