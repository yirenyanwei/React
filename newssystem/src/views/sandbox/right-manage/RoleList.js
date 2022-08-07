import { useState, useEffect } from 'react'
import { Table, Button, Modal, Tree } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
const { confirm } = Modal
export default function RoleList() {
  const [dataSource, setDataSource] = useState([])
  const [rightList, setRightList] = useState([])
  const [currentItem, setCurrentItem] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render(value) {
        //自定义样式
        return <b>{value}</b>
      }
    },
    {
      title: '角色名城',
      dataIndex: 'roleName',
    },
    {
      title: '操作',
      render(item) {//不填dataIndex 传递的为整条数据
        // antd Tag标签
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => showConfirm(item)} />
          <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={()=>{
            setIsModalVisible(true)
            setCurrentItem(item)
          }}/>

        </div>
      }
    }
  ];
  function deleteItem(item) {
    console.log(item)
    axios.delete(`http://localhost:8000/roles/${item.id}`).then(res => {
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
  function handleOk() {
    setIsModalVisible(false)
    //同步后端，同步DataSource
    axios.patch(`http://localhost:8000/roles/${currentItem.id}`, {rights:currentItem.rights}).then(res => {
      setDataSource(dataSource.map(item=>{
        if(item.id == currentItem.id) {
          item.rights = currentItem.rights
        }
        return item
      }))
    })
  }
  function handleCancel() {
    setIsModalVisible(false)
  }
  function onCheck(selectedKeys, info) {
    console.log(selectedKeys, info)
    let newItem = {...currentItem}
    newItem.rights = selectedKeys.checked
    setCurrentItem(newItem)

    
  }
  useEffect(() => {
    axios.get('http://localhost:8000/roles').then(res => {
      console.log(res.data)
      setDataSource(res.data)
    })

    axios.get('http://localhost:8000/rights?_embed=children').then(res=>{
      console.log(res.data)
      setRightList(res.data)
    })
  }, [])
  return (
    <div>
      {/* rowKey设置item中的key */}
      <Table dataSource={dataSource} columns={columns}
        pagination={{ pageSize: 4 }} rowKey={item => item.id} />

      <Modal title="权限分配" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* checkStrictly checkable 状态下节点选择完全受控（父子节点选中状态不再关联 */}
        <Tree
          checkable
          checkedKeys={currentItem.rights}
          onCheck= {onCheck}
          treeData={rightList}
          checkStrictly
        />

      </Modal>
    </div>
  )
}