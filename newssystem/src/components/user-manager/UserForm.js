import { useState, useEffect, forwardRef } from 'react'
import { Form, Input, Select } from 'antd'

const { Option } = Select

function UserForm(props, ref) {
    const [isDisable, setIsDisable] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem('token'))
    function checkRegionDisabled(item) {
        let roleId = userInfo.roleId //1超级管理员 2区域管理员 3区域编辑
        let region = userInfo.region
        //检查区域编辑
        if(props.isUpdate) {
            if(roleId == 1) {
                return false
            }else{
                return true
            }
        }else {
            //添加
            if(roleId == 1) {
                return false
            }else{
                //判断相同区域
                return region != item.value
            }
        }
    }
    function checkRoleDisabled(item) {
        //检查角色
        let roleId = userInfo.roleId //1超级管理员 2区域管理员 3区域编辑
        if(props.isUpdate) {
            if(roleId == 1) {
                return false
            }else{
                return true
            }
        }else {
            //添加
            if(roleId == 1) {
                return false
            }else{
                //判断权限
                return item.id != 3
            }
        }
    }
    useEffect(()=>{
        setIsDisable(props.isUpdateDisable)
    }, [props.isUpdateDisable])
    return (
        <Form
            ref={ref}
            layout="vertical"
        >
            <Form.Item
                name="username"
                label="用户名"
                // 校验，必填项
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="密码"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="region"
                label="区域"
                // 判断必填 超级管理员非必填
                rules={isDisable?[]:[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Select disabled={isDisable}>
                    {props.regionList.map(item =>
                        <Option value={item.value} key={item.id} disabled={checkRegionDisabled(item)}>{item.value}</Option>
                    )}
                </Select>
            </Form.Item>
            <Form.Item
                name="roleId"
                label="角色"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Select onChange={value=>{
                    let isDisable = (value == 1)
                    setIsDisable(isDisable)
                    if(isDisable) {
                        //设置region为空
                        ref.current.setFieldsValue({
                            region:''
                        })
                    }
                }}>
                    {props.roleList.map(item =>
                        <Option value={item.id} key={item.id} disabled={checkRoleDisabled(item)}>{item.roleName}</Option>
                    )}
                </Select>
            </Form.Item>
        </Form>
    )
}
//父组件可以取子组件的标签
export default forwardRef(UserForm)