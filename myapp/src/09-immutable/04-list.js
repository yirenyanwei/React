import React, { Component } from 'react'
import {List} from 'immutable'

let arr = [1,2,3]
let list = List(arr)
let list2 = list.push(4)
console.log(list, list2, list2.get(0))
let arr2 = list2.toJS()
console.log(arr, arr2)
export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
