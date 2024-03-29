import { Form, Button, Input, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.css'
import LoginParticles from './LoginParticles';
import axios from 'axios';
export default function Login(props) {
  function onFinish(values) {
    console.log(values)
    axios.get(`/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`).then(res=>{
      console.log(res.data)
      if(res.data.length>0) {
        localStorage.setItem('token', JSON.stringify(res.data[0]))
        props.history.push('/')
      }else {
        message.error('用户名或密码错误！')
      }
    })
  } 
  return (
    <div style={{ background: 'rgb(35,39,65)', height: '100%', overflow: 'hidden'}}>
      <LoginParticles></LoginParticles>
      <div className='loginContainer'>
        <div className='loginTitle'>全球新闻发布管理系统</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}