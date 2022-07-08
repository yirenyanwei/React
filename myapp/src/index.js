/**
 * 入口文件
 */
import React from 'react';
//把React组件渲染到页面中
import ReactDOM from 'react-dom/client';
import App from './06-react-redux/App';//必须大写
import { Provider } from 'react-redux'
import store from './06-react-redux/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
//严格模式
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//根节点下渲染节点 jsx = js + xml
// root.render(<h1 className='aaa' id='bbb'>Hello, world</h1>);
// root.render(React.createElement('h1', {
//   className: 'aaa',
//   id: 'bbb'
// }, 'Hello, world'))

//类组件
// root.render(<App></App>)
//最终转化为
// let app = new App({name: 'react'}).render()
// root.render(app)

//函数组件
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

