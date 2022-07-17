import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
      const StyledChild = styled(Child)`
        background:red;
      `
    return (
      <div>
        <StyledChild></StyledChild>
      </div>
    )
  }
}

class Child extends Component {
    render() {
        return (
            <div className={this.props.className}>
            {/* 接受高阶函数的属性  */}
                App
            </div>
        )
    }
}
