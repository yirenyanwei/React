import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {
    constructor() {
        super()
        this.state = {
            cinemaList: [],
            bakcinemaList: []
        }
        //请求数据
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7445935',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data)
            this.setState({
                cinemaList: res.data.data.cinemas,
                bakcinemaList: res.data.data.cinemas
            }, ()=>{
                new BetterScroll('.wrapper')
            })
        })
    }
    //后边有生命周期函数更适合发送
    render() {
        return (
            <div>
                <input onInput={this.handleInput}></input>
                <div className="wrapper" style={{ height: '500px', backgroundColor: 'yellow', overflow: 'hidden' }}>
                    <div className="content">
                        {this.state.cinemaList.map(item =>
                            <dl key={item.cinemaId}>
                                <dt>
                                    {item.name}
                                </dt>
                                <dd>
                                    {item.address}
                                </dd>
                            </dl>
                        )}
                    </div>
                </div>

            </div>
        )
    }
    handleInput = (event) => {
        let value = event.target.value.toUpperCase()
        console.log(value)
        let newList = this.state.bakcinemaList.filter(item => item.name.toUpperCase().includes(value) || item.address.toUpperCase().includes(value))
        this.setState({
            cinemaList: newList
        }, ()=>{
            new BetterScroll('.wrapper')
        })
    }
}
