import React, { Component } from 'react'
import {HashRouter as Router,BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'

const isAuth = ()=>{
  return localStorage.getItem('token')
}

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <Router>
            {/* tabbar */}
            {this.props.children}
            {/* switch到一个就会跳出 */}
            <Switch>
                {/* 路由匹配 */}
                <Route path='/films' component={Films}></Route>
                <Route path='/cinemas/search' component={Search}></Route>
                <Route path='/cinemas' component={Cinemas}></Route>
                {/* <Route path='/center' component={Center}></Route> */}
                {/* 路由拦截 */}
                <Route path='/center' render={(props)=>{
                  //判断授权
                  return isAuth()?<Center {...props}></Center>:<Redirect to='/login'></Redirect>
                }}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/city' component={City}></Route>
                {/* 动态路由，动态匹配 */}
                <Route path='/detail/:myid' component={Detail}></Route>
                {/* 重定向 模糊匹配*/}
                {/* <Redirect from='/' to='/films'></Redirect> */}
                {/* 精确匹配 exact */}
                <Redirect from='/' to='/films' exact></Redirect>

                {/* 找不到跳转404 */}
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
      </div>
    )
  }
}
