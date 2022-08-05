import { HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'
export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' render={()=>{
          //每一次匹配时都会走
          if(localStorage.getItem('token')){
            return <NewsSandBox></NewsSandBox>
          }
          return <Redirect to='/login'></Redirect>
        }}></Route>
      </Switch>
    </HashRouter>
  )
}