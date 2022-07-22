import React, { Component } from 'react'
import Dialog from './components/Dialog'
import PortalDialog from './components/PortalDialog'
import './App.css'
export default class App extends Component {
    state = {
        show:false
    }
    render() {
        return (
            <div className='box' onClick={()=>{
                console.log('click box')
            }}>
                <div className='left'></div>
                <div className='right'>
                <button onClick={()=>{
                    this.setState({
                        show:true
                    })
                }}>dialog</button>
                {this.state.show&&<PortalDialog onClose={()=>{
                    this.setState({
                        show:false
                    })
                }}>
                    <div>Content</div>
                </PortalDialog>}
                </div>
            </div>
        )
    }
}

