import React from 'react'

export default function Sidebar(pros) {
    console.log(pros)
    let {bg, position} = pros
    let styleObj = {
        background: bg, 
        width:'200px',
        position: 'fixed',
    }
    if(position=='left') {
        styleObj.left = 0
    }else if(position=='right') {
        styleObj.right = 0
    }

  return (
    <div style={styleObj}>
        <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
        </ul>
    </div>
  )
}
//验证跟默认值
Sidebar.defaultProps = {}
Sidebar.propTypes = {}
