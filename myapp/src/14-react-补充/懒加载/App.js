import React, { Component,Suspense } from 'react'
//懒加载
const Nowplaying = React.lazy(()=>import('./components/Nowplaying'))
const Comingsoon = React.lazy(()=>import('./components/Comingsoon'))

export default class App extends Component {
    state = {
        type:1
    }
    render() {
        return (
            <div>
                <div onClick={()=>{
                    this.setState({type:1})
                }}>正在上映</div>
                <div onClick={()=>{
                    this.setState({type:2})
                }}>即将上映</div>
                {/* 加载过程中显示Suspense的fallback */}
                <Suspense fallback={<div>正在加载中</div>}>
                    {
                        this.state.type == 1?<Nowplaying></Nowplaying>:<Comingsoon></Comingsoon>
                    }
                </Suspense>
            </div>
        )
    }
}


