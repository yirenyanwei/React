import { connect } from 'dva'
import React, { Component } from 'react'

class Detail extends Component {
    componentDidMount() {
        //接受传递的id
        console.log(this.props.match.params.filmId)

        this.props.dispatch({
            type:'maizuo/hide'
        })
    }
    componentWillUnmount() {
        this.props.dispatch({
            type:'maizuo/show'
        })
    }
    render() {
        return (
            <div>
                Detail
            </div>
        )
    }
}
//用connect包装会有dispatch属性
export default connect()(Detail)