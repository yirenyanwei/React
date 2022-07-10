import React, { Component } from 'react'
import { Col, Row } from 'antd';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>24栅格</div>

        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
        {/* 两边排列 offset可以将列向右侧偏 */}
        <Row>
            <Col span={8}>col-8</Col>
            <Col span={8} offset={8}>col-8</Col>
        </Row>
      </div>
    )
  }
}
