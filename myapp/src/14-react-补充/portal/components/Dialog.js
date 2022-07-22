import React, { Component } from 'react'

export default class Dialog extends Component {
    render() {
        let rootStyle = {
            width:'100%',
            height:'100%',
            position:'fixed',
            left: '0',top:'0',
            background:'rgba(0,0,0,0.7)',
            zIndex:'10'
        }
        return (
            <div style={rootStyle}>
                Dialog
            </div>
        )
    }
}
