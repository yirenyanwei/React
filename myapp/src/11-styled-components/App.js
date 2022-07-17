import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
      const name = console.log`
      12345
      `
      //本质是一个函数调用
    const StyledFooter = styled.footer`
        background:yellow;
        position:fixed;
        left:0;
        bottom:0;
        height:50px;
        line-height:50px;
        text-align:center;
        width:100%;
        ul {
            display:flex;
            li {
                flex: 1;
                &:hover{
                    background:red;
                }
            }
        }
    `
    return (
      <div>
        <StyledFooter>
            <ul>
                <li>首页</li>
                <li>列表</li>
                <li>我的</li>
            </ul>
        </StyledFooter>
      </div>
    )
  }
}
