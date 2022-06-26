import React, { Component } from 'react'

class Box extends Component{
    render() {
        console.log('render')
        let styleObj = {
            width:'100px',
            height:'100px',
            border: '1px solid gray',
            margin:'10px',
            float: 'left'
        }
        if(this.props.current == this.props.index) {
            styleObj.border = '1px solid red'
        }
        return (
            <div style={styleObj}></div>
        )
    }
    shouldComponentUpdate(newProps, newState) {
        //只更新变化的
        if(this.props.current==this.props.index||newProps.current==newProps.index){
            return true
        }
        return false
    }
}

export default class App extends Component {
    state = {
        list:['1','2','3','4','5','6'],
        current:0
    }
  render() {
    return (
      <div>
        <input type='number' value={this.state.current} onChange={evt=>{
            this.setState({current:parseInt(evt.target.value)})
        }}></input>
        <div style={{overflow:'hidden'}}>
            {this.state.list.map((item,index)=>
                <Box index={index} current={this.state.current} key={item}></Box>
            )}
        </div>
      </div>
    )
  }
}
