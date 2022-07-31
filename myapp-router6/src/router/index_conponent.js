import React from 'react'
import {BrowserRouter,HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import Film from '../views/Film';
// import Cinema from '../views/Cinema';
import Center from '../views/Center';
import Redirect from '../components/Redirect';
import NotFound from '../components/NotFound';
import Search from '../views/Search'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'
import Detail from '../views/Detail';
import Login from '../views/Login';
import AuthComponent from '../components/AuthComponent';

export default function MRouter() {
  return (
    <div>
        <Routes>
          {/* <Route path='/' element={<Film></Film>}></Route> */}
          {/* index 匹配父路径 也就是/ */}
          {/* <Route index element={<Film></Film>}></Route> */}
          <Route path='/films' element={<Film></Film>}>
              <Route path='/films/nowplaying' element={<Nowplaying></Nowplaying>}></Route>
              {/* 相对路径的写法 */}
              <Route path='comingsoon' element={<Comingsoon></Comingsoon>}></Route>
              {/* 没有匹配的路由，只匹配父路径 */}
              <Route index element={<Redirect to='/films/nowplaying'></Redirect>}></Route>
          </Route>
          <Route path='/cinemas' element={LazyLoad('views/Cinema')}></Route>
          <Route path='/cinemas/search' element={<Search></Search>}></Route>
          <Route path='/center' element={<AuthComponent>
              <Center></Center>
          </AuthComponent>}></Route>
          {/* 动态路由 */}
          <Route path='/detail/:filmId' element={<Detail></Detail>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>

          {/* 重定向 */}
          {/* <Route path='*' element={<Navigate to='/films'></Navigate>}></Route> */}
          <Route path='/' element={<Redirect to='/films'></Redirect>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          
        </Routes>
    </div>
  )
}

function LazyLoad(path){
    const Comp = React.lazy(()=>import(`../${path}`))
    return (
        <React.Suspense fallback={<div>加载中...</div>}>
            <Comp></Comp>
        </React.Suspense>
    )
}