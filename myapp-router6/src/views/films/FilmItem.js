import React, { Component } from 'react'
import withRouter from '../../components/withRouter'

class FilmItem extends Component {
    handleChange(item) {
        //query
        // navigate(`/detail?filmId=${item.filmId}`)
        //route 传参
        this.props.history.push(`/detail/${item.filmId}`)
    }
    render() {
        let item = this.props.item
        return (
            <li onClick={() => this.handleChange(item)}>{item.name}

            </li>
        )
    }
}
export default withRouter(FilmItem)