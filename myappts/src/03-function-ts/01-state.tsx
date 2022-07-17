import React,{useState,useRef} from 'react'

export default function App() {
    const [name, setName] = useState<string>('yanwei')
    const mytext = useRef<HTMLInputElement>(null)
  return (
    <div>
        {name}
        <input ref={mytext}></input>
        <Child title='主页'></Child>
    </div>
  )
}
interface IProps {
    title:string
}
function Child(props:IProps) {
    return (
        <div>Child-{props.title}</div>
    )
}

const Child2:React.FC<IProps> = (props:IProps)=> {
    return (
        <div>Child-{props.title}</div>
    )
}