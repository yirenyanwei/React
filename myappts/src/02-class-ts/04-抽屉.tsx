import React, { Component } from 'react'

interface Iprops {
    isShow:boolean
}
//Component<约束属性，约束状态>
export default class App extends Component<any, Iprops> {
    state = {
        isShow:true
    }
  render() {
    return (
      <div>
          <Navbar title='首页' cb={()=>{
              this.setState({
                  isShow: !this.state.isShow
              })
          }}></Navbar>
          {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}

interface IProps {
    title:string,
    cb:()=>void
}
class Navbar extends Component<IProps,any> {
    render() {
        return (
          <div>
              Navbar-{this.props.title}
              <button onClick={()=>{
                  this.props.cb()
              }}>change</button>
          </div>
        )
      }
}

class Sidebar extends Component {
    render() {
        return (
          <div>
            SideBar
          </div>
        )
      }
}