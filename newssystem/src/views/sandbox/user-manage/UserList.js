import { useState, useEffect, useRef } from 'react'
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
  const formRef = useRef(null)
  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      render(value) {
        //自定义样式
        return <b>{value == '' ? '全球' : value}</b>
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
        return <Switch checked={value} disabled={data.default}></Switch>
      }
    },
    {
      title: '操作',
      key: 'operate',
      render(item) {//不填dataIndex 传递的为整条数据
        // antd Tag标签
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => showConfirm(item)} disabled={item.default} />
          <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.default} />

        </div>
      }
    }
  ];

  function deleteItem(item) {
    console.log(item)
    if (item.grade == 1) {
      axios.delete(`http://localhost:8000/rights/${item.id}`).then(res => {
        //删除前端
        setDataSource(dataSource.filter(data => data.id != item.id))
      })

    } else {
      //删除二级菜单
      axios.delete(`http://localhost:8000/children/${item.id}`).then(res => {
        let newDataSource = [...dataSource]
        let rightId = item.rightId
        let rights = newDataSource.filter(data => data.id == rightId)
        if (rights.length > 0) {
          let right = rights[0]
          right.children = right.children.filter(data => data.id != item.id)
          setDataSource(newDataSource)
        }
      })

    }
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
  useEffect(() => {
    //用户列表 向下关联roleId
    axios.get('http://localhost:8000/users?_expand=role').then(res => {
      setDataSource(res.data)
    })
    //角色列表
    axios.get('http://localhost:8000/roles').then(res => {
      setRoleList(res.data)
    })
    //区域
    axios.get('http://localhost:8000/regions').then(res => {
        setRegionList(res.data)
    })

  }, [])
  return (
    <div>
      <Button type='primary' onClick={()=>setIsAddVisible(true)}>添加用户</Button>
      <Table dataSource={dataSource} columns={columns}
        pagination={{ pageSize: 4 }} rowKey={(item) => item.id} />

      <Modal
        visible={isAddVisible}
        title="添加用户"
        okText="确定"
        cancelText="取消"
        onCancel={()=>setIsAddVisible(false)}
        onOk={() => {
          console.log(formRef)
          let form = formRef.current
          form.validateFields().then(res=>{
            //校验成功
            console.log(res)
          }).catch(err=>{
            //校验失败
            console.log(err)
          })
        }}
      >
        <UserForm regionList={regionList} roleList={roleList} ref={formRef}></UserForm>
      </Modal>
    </div>
  )
}