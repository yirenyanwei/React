import React, { Component } from 'react'
import axios from 'axios'

export default class Comingsoon extends Component {
  componentDidMount() {
    axios.get('/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=DCCBB870FA7C11EC81BE37F2ACFC2475071FF920F90C48F5963C11F6F4B00126&optimus_risk_level=71&optimus_code=10').then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <h2>Comingsoon</h2>

      </div>
    )
  }
}
