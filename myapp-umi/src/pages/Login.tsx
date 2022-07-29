import {useEffect, useState} from 'react'
import {useHistory} from 'umi'
export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  useEffect(() => {
    fetch('/users').then(res=>res.json())
    .then(res=>{
      console.log(res)
    })
  }, [])
  
  return (
    <div>
      <input type='text' onChange={evt=>setUsername(evt.target.value)}></input>
      <input type='password' onChange={evt=>setPassword(evt.target.value)}></input>
      <button onClick={()=>{
        fetch('/users/login', {
          method:'POST',
          headers: {
            "Content-Type":'application/json'
          },
          body: JSON.stringify({username, password})
        }).then(res=>res.json())
        .then(res=>{
          console.log(res)
          localStorage.setItem('token', '123')
          history.push('/center')
        })
      }}>登录</button>
    </div>
  )
}