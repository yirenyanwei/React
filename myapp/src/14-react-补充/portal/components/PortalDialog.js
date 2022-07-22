import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class PortalDialog extends Component {
    render() {
        let rootStyle = {
            width: '100%',
            height: '100%',
            position: 'fixed',
            left: '0', top: '0',
            background: 'rgba(0,0,0,0.7)',
            zIndex: '10',
            color:'white'
        }
        // 生成到document.body节点上
        return createPortal(
            <div style={rootStyle}>
                Dialog-
                {this.props.children}
                <button onClick={this.props.onClose}>close</button>
            </div>, document.body)
    }
}
