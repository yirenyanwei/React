import { Button } from 'antd';
import axios from 'axios'
export default function Home() {
  function ajax() {
    //基础用法
    /*
    //查询 get
    axios.get('http://localhost:8000/posts').then(res=>{
      console.log(res.data)
    })
    //增 post
    axios.post('http://localhost:8000/posts', { 
      "id": 2, 
      "title": "json-server2", 
      "author": "typicode2" 
    }).then(res=>{
      console.log('增加')
    })
    //修改 put 全部替换
    axios.put('http://localhost:8000/posts/2', { 
      "id": 2, 
      "title": "json-server2修改", 
      "author": "typicode2" 
    }).then(res=>{
      console.log('修改')
    })
    // 更新 patch 局部更新
    axios.patch('http://localhost:8000/posts/2', { 
      "author": "typicode2修改" 
    }).then(res=>{
      console.log('修改')
    })
    //删除 delete 关联的表中数据也会删除
    axios.delete('http://localhost:8000/posts/2').then(res=>{
      console.log('删除')
    })

    */
   // _embed 取关联表的数据嵌入结果中 向下找关联 使用到postId的表
   axios.get('http://localhost:8000/posts?_embed=comments').then(res=>{
      console.log(res.data)
    })

    // _expand 取关联表的数据嵌入结果中 向上找关联 postId关联的表 注意post
    axios.get('http://localhost:8000/comments?_expand=post').then(res=>{
      console.log(res.data)
    })
  }
  return (
    <div>
      Home
      <Button type="primary" onClick={ajax}>Button</Button>
    </div>
  )
}