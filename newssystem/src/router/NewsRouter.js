import axios from 'axios';
import React, {useEffect,useState} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import Audit from '../views/sandbox/audit-manage/Audit';
import AuditList from '../views/sandbox/audit-manage/AuditList';
import Home from "../views/sandbox/home/Home";
import NewsAdd from '../views/sandbox/news-manage/NewsAdd';
import NewsCategory from '../views/sandbox/news-manage/NewsCategory';
import NewsDraft from '../views/sandbox/news-manage/NewsDraft';
import NoPermission from "../views/sandbox/nopermission/NoPermission";
import Published from '../views/sandbox/publish-manage/Published';
import Sunset from '../views/sandbox/publish-manage/Sunset';
import Unpublished from '../views/sandbox/publish-manage/Unpublished';
import RightList from "../views/sandbox/right-manage/RightList";
import RoleList from "../views/sandbox/right-manage/RoleList";
import UserList from "../views/sandbox/user-manage/UserList";

const LocalRouterMap = {
    '/home':Home,
    '/user-manage/list':UserList,
    '/right-manage/role/list':RoleList,
    '/right-manage/right/list':RightList,
    "/news-manage/add":NewsAdd,
    "/news-manage/draft":NewsDraft,
    "/news-manage/category":NewsCategory,
    "/audit-manage/audit":Audit,
    "/audit-manage/list":AuditList,
    "/publish-manage/unpublished":Unpublished,
    "/publish-manage/published":Published,
    "/publish-manage/sunset":Sunset
}

export default function NewsRouter() {
    const [dataList, setDataList] = useState([])
    const userInfo = JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
      Promise.all([
          axios.get('/rights'),
          axios.get('/children')
      ]).then(res=>{
        //   console.log(res)
        let list = []
        for(let i = 0; i<res.length; i++){
            list = list.concat(res[i].data)
        }
        setDataList(list)
      })
    
      return () => {
        
      }
    }, [])
    function checkPermission(item) {
        //检查路由
        let key = item.key
        if(!(LocalRouterMap[key]&&item.pagepermisson)){
            return false
        }
        //检查用户
        return userInfo.role.rights.includes(key)
    }
    return (
        <Switch>
            {
                dataList.map(item=>{
                    if(checkPermission(item)) {
                        return <Route path={item.key} key={item.key} component={LocalRouterMap[item.key]} exact></Route>
                    }
                })
            }
            {/* 精确匹配 */}
            <Redirect from="/" to='/home' exact></Redirect>
            {/* 未找到 */}
            {dataList.length>0&&<Route path='*' component={NoPermission}></Route>}
        </Switch>
    )
}
