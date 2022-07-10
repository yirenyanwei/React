import React, { Component } from 'react'
import {Map, List, fromJS} from 'immutable'

export default class App extends Component {
    state = {
        //fromJs 修改为Map和List对象
        info: fromJS({
            name:'yanwei',
            location: {
                province:'bj',
                city:'北京'
            },
            favour:['1','2','3']
        })
    }
    componentDidMount(){
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h1>个人信息</h1>
        <button onClick={()=>{
            this.setState({
                //setIn修改多层级下的某一个数据
                info:this.state.info.setIn(['location', 'city'], '山东')
            })
        }}>修改</button>
        {
            this.state.info.get('name')
        }
        -
        {
            this.state.info.get('location').get('city')
        }
        <br></br>
        {
            this.state.info.get('favour').map((item,idx)=>
                <li key={item}>
                    {item}
                    <button onClick={()=>{
                        //修改数组
                        this.setState({
                            info:this.state.info.setIn(['favour', idx], '111')
                        })
                        //删除
                        this.setState({
                            info:this.state.info.updateIn(['favour'], list=>{
                                return list.splice(idx, 1)
                            })
                        })
                    }}>del</button>
                </li>
            )
        }
      </div>
    )
  }
}
