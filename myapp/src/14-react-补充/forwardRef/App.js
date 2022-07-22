import React, { Component, forwardRef } from 'react'

export default class App extends Component {
    myRef = React.createRef()
    render() {
        return (
            <div>
                <button onClick={()=>{
                    console.log(this.myRef)
                }}>获取焦点</button>
                <Child ref={this.myRef}></Child>
            </div>
        )
    }
}
//原来ref是获取组件对象，但是forwardRef封装，然后透传给组件
const Child = forwardRef((props, ref)=>{
    let rootStyle = {
        background:'yellow'
    }
    return (
        <div style={rootStyle}>
            <input ref={ref}></input>
        </div>
    )
})