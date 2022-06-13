import React, { Component } from 'react'
import './css/01-index.css' //导入css  webpack的支持

export default class App extends Component {
  render() {
    let name = 'yanwei'  
    let divStyle = {
        // -改为驼峰写法
        backgroundColor: 'red',
        fontSize: '30px',
    }
    return (
      <div>
        App-{name}
        {/* 内部样式 */}
        <div style={divStyle}>内部样式</div>
        <div style={{backgroundColor:'red'}}>内部样式2</div>

        {/* 外部样式  特殊1 class->className */}
        <div className='active'>外部样式</div>
        <div id='myapp'>myapp</div>
        
        {/* 特殊2 聚焦 for->htmlFor */}
        <label htmlFor="username">username:</label>
        <input type="text" id="username"></input>
      </div>
    )
  }
}
