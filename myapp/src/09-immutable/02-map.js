import React, { Component } from 'react'
import {Map} from 'immutable'

//Map 把普通对象转化成immutable对象 Map只能包装一层
var obj = {
    name:'yanwei',
    age:18,
}
var immutableObj = Map(obj)
//set get
var newImmutableObj = immutableObj.set('name', 'xiaoming')
console.log(immutableObj.get('name'), newImmutableObj.get('name'))

//immutable->普通结构
var obj2 = newImmutableObj.toJS()
console.log(obj, obj2)

export default class App extends Component {
    state = {
        info:Map({
            name:'yanwei',
            age:18
        }),
        info2: {
            name:'yanwei2',
            age:18
        }
    }
  render() {
    return (
      <div>
        <div>App-{this.state.info.get('name')}-{this.state.info.get('age')}</div>
        <div>App2-{this.state.info2.name}-{this.state.info2.age}</div>
        <button onClick={()=>{
            // 用法1
            this.setState({
                info:this.state.info.set('name', 'xiaoming').set('age', 20)
            })
            //用法2
            let oldObj = Map(this.state.info2)
            let newObj = oldObj.set('name', 'haha').set('age', 28)
            console.log(newObj)
            this.setState({
                info2:newObj.toJS()
            })
        }}>change</button>
      </div>
    )
  }
}
