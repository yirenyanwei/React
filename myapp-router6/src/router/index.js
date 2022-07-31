import React from 'react'
import {BrowserRouter,HashRouter, Navigate, Route, Routes,useRoutes} from 'react-router-dom'
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
    const element = useRoutes([
        {
            path:'/films',
            element:<Film></Film>,
            children:[
                {
                    path:'nowplaying',
                    element:<Nowplaying></Nowplaying>
                },
                {
                    path:'comingsoon',
                    element:<Comingsoon></Comingsoon>
                },
                {
                    path:'',
                    element:<Redirect to='/films/nowplaying'></Redirect>
                },
            ]
        },
        {
            path:'/cinemas',
            element:LazyLoad('views/Cinema')
        },
        {
            path:'/cinemas/search',
            element:<Search></Search>
        },
        {
            path:'/center',
            element:<AuthComponent>
                <Center></Center>
            </AuthComponent>
        },
        {
            path:'/detail/:filmId',
            element:<Detail></Detail>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/',
            element:<Redirect to='/films'></Redirect>
        },
        {
            path:'/',
            element:<NotFound></NotFound>
        }
    ])
  return (
    element
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