import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//web报告分析
import reportWebVitals from './reportWebVitals'
/**
StrictMode 是一个用来检查项目中潜在问题的工具。StrictMode 不会渲染任何可见的 UI，它为其后代元素触发额外的检查和警告。
注意：严格模式检查仅在开发模式下运行；它们不会影响生产构建。 
*/;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //严格模式导致生命周期的重复执行
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
