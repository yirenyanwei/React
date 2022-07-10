import React,{useEffect} from 'react'

function NotFound(props) {
  useEffect(() => {
    console.log(props)
  
    return () => {
      
    }
  }, [])
  
  return (
    <div>
        404 not found
    </div>
  )
}
function myconnect(cb, obj) {//渲染劫持，嵌套一层新的父组件，然后传给子节点
  let value = cb()
  return (MyComponent)=>{
    return (props)=>{//生成新的函数组件
      return (
        <div style={{color:'red'}}>
          <MyComponent {...value} {...props} {...obj}></MyComponent>
        </div>
      )
    }
  }
}
export default myconnect(()=>{
  return {
    a:1,b:2
  }
}, {
  aa(){console.log('aa')}
})(NotFound)