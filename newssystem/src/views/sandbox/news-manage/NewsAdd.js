import React, { useState, useEffect, useRef } from 'react'
import { PageHeader, Steps, Button, Form, Input, Select, message, notification } from 'antd'
import style from './News.module.css'
import axios from 'axios';
import NewsEditor from '../../../components/news-manager/NewsEditor';

const { Step } = Steps;
const {Option} = Select;

export default function NewsAdd(props) {
  const [current, setCurrent] = useState(0)
  const [categoryList, setCategoryList] = useState([])
  const NewsRef = useRef(null)
  const [formInfo, setFormInfo] = useState({})//第一步表单输入
  const [editContent, setEditContent] = useState('')//第二步输入
  const userInfo = JSON.parse(localStorage.getItem('token'))
  useEffect(() => {
    axios.get('/categories').then(res=>{
      setCategoryList(res.data)
    })
  
    return () => {
      
    }
  }, [])
  

  function handleNext() {
    if(current == 0) {
      NewsRef.current.validateFields().then(res=>{
        console.log(res)
        setFormInfo(res)
        setCurrent(current + 1)
      }).catch(err=>{
        console.log(err)
      })
    }else {
      if(!editContent || editContent.trim()=='<p></p>') {
        message.error('不能为空')
        return
      }
      setCurrent(current + 1)
    }
    
  }
  function handlePrevious() {
    setCurrent(current - 1)
  }
  function handleSave(auditState) {
    axios.post('/news', {
      // "title": "千锋教育",
      // "categoryId": 3,
      ...{formInfo},
      "content":editContent,
      "region": userInfo.region?'userInfo.region':'全球',
      "author": userInfo.username,
      "roleId": userInfo.roleId,
      "auditState": auditState,
      "publishState": 0,
      "createTime": Date.now(),
      "star": 0,
      "view": 0,
      // "publishTime": 0
    }).then(res=>{
      let path = '/news-manage/draft'
      let _content = '草稿箱'
      if(auditState == 1) {
        path = '/audit-manage/list'
        _content='审核列表'
      }
      props.history.push(path)
      //通知
      notification.info({
        message: `通知`,
        description:
          `您可以到${_content}中查看。`,
        placement:'bottomRight',
      });
    })
  }
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="撰写新闻"
        subTitle="This is a subtitle"
      />
      <Steps current={current}>
        <Step title="基本信息" description="新闻标题、新闻分类" />
        <Step title="新闻内容" description="新闻主题内容" />
        <Step title="新闻提交" description="保存草稿或者提交审核" />
      </Steps>

      <div style={{marginTop:'50px'}}>
        <div className={current == 0 ? '' : style.hidden}>
          {/* 第一步  24栅格*/}
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            ref={NewsRef}
          >
            <Form.Item
              label="新闻标题"
              name="title"
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="新闻分类"
              name="categoryId"
              rules={[{ required: true, message: 'Please input your category!' }]}
            >
              <Select>
                {categoryList.map(item=>
                  <Option value={item.id} key={item.id}>{item.value}</Option>
                )}
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div className={current == 1 ? '' : style.hidden}>
        {/* 第二步编辑内容 */}
          <NewsEditor getContent={value=>{
            setEditContent(value)
          }}></NewsEditor>
        </div>
        <div className={current == 2 ? '' : style.hidden}>
          {/* 第三步 */}
        </div>
      </div>

      <div style={{ marginTop: '50px' }}>
        {
          current == 2 && <span>
            <Button type='primary' onClick={()=>handleSave(0)}>保存草稿箱</Button>
            <Button type='danger' onClick={()=>handleSave(1)}>提交审核</Button>
          </span>
        }
        {
          current < 2 && <Button type='primary' onClick={() => handleNext()}>下一步</Button>
        }
        {
          current > 0 && <Button onClick={() => handlePrevious()}>上一步</Button>
        }
      </div>
    </div>
  )
}
