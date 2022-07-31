import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Film() {
  return (
    <div>
        <div style={{background:'yellow',height:'200px'}}>大轮播</div>
        {/* 路由容器 */}
        <Outlet></Outlet>
    </div>
  )
}
