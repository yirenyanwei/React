import React from 'react'
import Redirect from './Redirect'

export default function AuthComponent(props) {
    if(isAuth()) {
        return props.children
    }
  return (
    <Redirect to='/login'></Redirect>
  )
}

function isAuth() {
    return localStorage.getItem('token')       
}
