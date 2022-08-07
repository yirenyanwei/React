import { useState, useEffect } from 'react'
import { Table, Tag, Button, Modal, Popover, Switch } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
const { confirm } = Modal;
export default function RightList() {
  const [dataSource, setDataSource] = useState([])
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render(value) {
        //自定义样式
        return <b>{value}</b>
      }
    },
    {
      title: '权限名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key',//React 需要的 key
      render(value) {
        // antd Tag标签
        return <Tag color='orange'>{value}</Tag>
      }
    },
    ,
    {
      title: '操作',
      key: 'operate',
      render(item) {//不填dataIndex 传递的为整条数据
        // antd Tag标签
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => showConfirm(item)} />
          <Popover content={popoverContent(item)} title="页面配置" trigger={item.pagepermisson == undefined ? '' : "click"}>
            <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.pagepermisson == undefined} />
          </Popover>

        </div>
      }
    }
  ];
  const popoverContent = function (item) {
    return (
      <div style={{ textAlign: 'center' }}>
        <Switch checked={item.pagepermisson} onChange={() => {
          item.pagepermisson = item.pagepermisson == 0 ? 1 : 0
          setDataSource([...dataSource])
          //同步后端
          if (item.grade == 1) {
            axios.patch(`http://localhost:8000/rights/${item.id}`, {pagepermisson:item.pagepermisson}).then(res => {

            })
          }else {
            axios.patch(`http://localhost:8000/children/${item.id}`, {pagepermisson:item.pagepermisson}).then(res => {

            })
          }
        }}></Switch>
      </div>
    )
  }
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
  function transformData(list) {
    //删除为空的children属性
    let backtrack = function (_list) {
      for (let i = 0; i < _list.length; i++) {
        let data = _list[i]
        if (data.children) {
          if (data.children.length > 0) {
            backtrack(data.children)
          } else {
            delete data.children
          }
        }
      }
    }
    backtrack(list)
    return list

  }
  useEffect(() => {
    axios.get('http://localhost:8000/rights?_embed=children').then(res => {
      setDataSource(transformData(res.data))
    })
  }, [])
  return (
    <div>
      <Table dataSource={dataSource} columns={columns}
        pagination={{ pageSize: 4 }} />
    </div>
  )
}