import React, { Component } from 'react'

export default class App extends Component {
    myRef = React.createRef()
    render() {
        return (
            <div >
            {/* <input type="text" ref="mytext"></input> */}
            <input ref={this.myRef} type="text"></input>
            <button onClick={()=>{
                // console.log('click1', this.refs.mytext)
                console.log('click', this.myRef.current)
            }}>add</button>
        </div>
        )
    }
}
