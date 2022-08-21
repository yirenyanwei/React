import { useState, useEffect, useRef } from 'react'
import {flushSync} from 'react-dom'
import { Table, Tag, Button, Modal, Popover, Switch} from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import UserForm from '../../../components/user-manager/UserForm'
const { confirm } = Modal;
export default function UserList() {
  const [dataSource, setDataSource] = useState([])
  const [roleList, setRoleList] = useState([])
  const [regionList, setRegionList] = useState([])
  const [isAddVisible, setIsAddVisible] = useState(false)
  const [isUpdateVisible, setIsUpdateVisible] = useState(false)
  const [isUpdateDisable, setIsUpdateDisable] = useState(false)//form中禁用
  const [currentUpdateItem, setCurrentUpdateItem] = useState(null)
  const formRef = useRef(null)
  const updateFormRef = useRef(null)
  const userInfo = JSON.parse(localStorage.getItem('token'))
  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      render(value) {
        //自定义样式
        return <b>{value == '' ? '全球' : value}</b>
      },
      //过滤
      filters:[...regionList.map(item=>({
        text:item.title,
        value:item.value
      })), {text:'全球', value:''}],
      onFilter(value, item) {
        return item.region == value
      }
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      render(value) {
        return value?.roleName
      }
    },
    {
      title: '用户名称',
      dataIndex: 'username',
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      render(value, data) {
        //roleState 开关状态
        //default 是否可删除
        return <Switch checked={value} disabled={data.default} onChange={()=>changeRoleState(data)}></Switch>
      }
    },
    {
      title: '操作',
      key: 'operate',
      render(item) {//不填dataIndex 传递的为整条数据
        // antd Tag标签
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => showConfirm(item)} disabled={item.default} />
          <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.default} onClick={()=>handleChange(item)}/>

        </div>
      }
    }
  ];
  function handleChange(item) {
    // form dom创建
    flushSync(()=>{
      setIsUpdateDisable(!isUpdateDisable)//刷新状态并立即执行
      setIsUpdateVisible(true)
    })
    if(item.roleId == 1){
      //超级管理员
      setIsUpdateDisable(true)
    }else {
      setIsUpdateDisable(false)
    }
    let form = updateFormRef.current
    form.setFieldsValue(item)
    setCurrentUpdateItem(item)
  }
  function changeRoleState(item) {
    axios.patch(`/users/${item.id}`, {roleState:!item.roleState}).then(res => {
      //修改状态
      item.roleState = !item.roleState
      setRoleList([...roleList])
    })
  }
  function deleteItem(item) {
    axios.delete(`/users/${item.id}`).then(res => {
      //删除前端
      setDataSource(dataSource.filter(data => data.id != item.id))
    })
  }
  function showConfirm(item) {
    confirm({
      title: '您确定要删除吗?',
      icon: <ExclamationCircleOutlined />,
      content: '删除后不可回退！',
      onOk() {
        // console.log('OK');
        deleteItem(item)
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }
  const addFormOk = () => {
    console.log(formRef)
    let form = formRef.current
    form.validateFields().then(res=>{
      //校验成功
      console.log(res)
      setIsAddVisible(false)
      //重置form
      form.resetFields()
      //post到后端生成id
      axios.post('/users', {
        ...res,
        "roleState": true,//开关状态
        "default": false,//是否可删除
      }).then(res=>{
        console.log(res.data)
        setDataSource([...dataSource, {
          ...res.data,
          role:roleList.filter(item=>item.id==res.data.roleId)[0]//自己加一下role字段
        }])
      })
      
    }).catch(err=>{
      //校验失败
      console.log(err)
    })
  }
  function updateFormOk() {
    let form = updateFormRef.current
    form.validateFields().then(res=>{
      //校验成功
      console.log(res)
      setIsUpdateVisible(false)
      
      axios.patch(`/users/${currentUpdateItem.id}`, res).then(result=>{
        setDataSource(dataSource.map(item=>{
          if(item.id == currentUpdateItem.id) {
            return {
              ...item, 
              ...res,
              role:roleList.filter(data=>data.id==res.roleId)[0]//自己加一下role字段
            }
          }
          return item
        }))
      })
      
    }).catch(err=>{
      //校验失败
      console.log(err)
    })
  }
  useEffect(() => {
    let roleId = userInfo.roleId //1超级管理员 2区域管理员 3区域编辑
    let region = userInfo.region
    let userName = userInfo.username
    //用户列表 向下关联roleId
    axios.get('/users?_expand=role').then(res => {
      let list = res.data
      if(roleId!=1) {
        list = list.filter(item=>{
          if(item.username == userName){
            //自己
            return true
          }
          if(item.region==region && item.roleId==3){
            //同一区域的区域编辑
            return true
          }
        })
      }
      setDataSource(list)
    })
    //角色列表
    axios.get('/roles').then(res => {
      setRoleList(res.data)
    })
    //区域
    axios.get('/regions').then(res => {
        setRegionList(res.data)
    })

  }, [])
  return (
    <div>
      <Button type='primary' onClick={()=>setIsAddVisible(true)}>添加用户</Button>
      <Table dataSource={dataSource} columns={columns}
        pagination={{ pageSize: 4 }} rowKey={(item) => item.id} />
      {/* 添加 */}
      <Modal
        visible={isAddVisible}
        title="添加用户"
        okText="确定"
        cancelText="取消"
        onCancel={()=>setIsAddVisible(false)}
        onOk={addFormOk}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={formRef}></UserForm>
      </Modal>
      {/* 更新 */}
      <Modal
        visible={isUpdateVisible}
        title="更新用户"
        okText="更新"
        cancelText="取消"
        onCancel={()=>setIsUpdateVisible(false)}
        onOk={updateFormOk}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={updateFormRef} isUpdateDisable={isUpdateDisable} isUpdate={true}></UserForm>
      </Modal>
    </div>
  )
}