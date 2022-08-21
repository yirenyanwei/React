import { Redirect, Route, Switch } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import { Layout } from 'antd';
import './NewsSandBox.css'
import NewsRouter from "../../router/NewsRouter";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from "react";
const { Header, Sider, Content } = Layout;

export default function NewsSandBox() {
  NProgress.start()
  useEffect(()=>{
    NProgress.done()
  })
  return (
    <Layout>
      <SideMenu></SideMenu>

      <Layout className="site-layout">
        <TopHeader></TopHeader>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            overflow:'auto',//有滚动条
          }}
        >
          <NewsRouter></NewsRouter>
        </Content>

      </Layout>
    </Layout>
  )
}