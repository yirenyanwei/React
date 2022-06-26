import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div style={{background:'red'}}>
                {this.props.children}
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{background:'yellow',width:'200px'}}>
                <ul>
                    <li>111</li>
                    <li>111</li>
                </ul>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        isShow: true,
    }
  render() {
    return (
      <div>
        <Navbar>
        <button onClick={()=>{
            this.setState({isShow: !this.state.isShow})
        }}>click</button>
        </Navbar>
        {this.state.isShow&&<Sidebar></Sidebar>}
      </div>
    )
  }
}
