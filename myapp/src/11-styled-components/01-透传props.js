import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {
  render() {
      const StyledInput = styled.input`
        outline:none;
        border-radius:10px;
        border-bottom:1px solid red;
      `
        //通过方法取传的参数
      const StyledDiv = styled.div`
        background:${props=>props.bg || 'yellow'};
        width:100px;
        height:100px;
      `
    return (
      <div>
        App
        <StyledInput></StyledInput>
        <StyledDiv bg='red'></StyledDiv>
      </div>
    )
  }
}
