const express = require('express')
const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
//描述 
// Account 自定义类型；getFilmDetail(id:Int!)传参，！为必须穿
var Schema = buildSchema(`
    type Account {
        name: String,
        age: Int,
    }
    type Film {
        id:Int,
        name:String,
        poster:String,
        price:Int
    }
    type Query {
        hello: String,
        getName: String,
        getAge: Int,
        getAllNames: [String],
        getAllAges: [Int],
        getAccountInfo: Account,
        getNowplayingList: [Film],
        getFilmDetail(id:Int!): Film
    }
`)
//假数据
var fakeDB = [
    {
        id:1,
        name:'111',
        poster:'https://111',
        price:100
    },
    {
        id:2,
        name:'222',
        poster:'https://111',
        price:100
    },
    {
        id:3,
        name:'333',
        poster:'https://111',
        price:100
    }
]
//处理器
const root = {
    hello:()=>{
        //通过数据库查询
        let str = 'hello world'
        return str
    },
    getName() {
        return 'yanwei'
    },
    getAge() {
        return 18
    },
    getAllNames() {
        return ['yanwei','xiaoming']
    },
    getAllAges() {
        //数组类型
        return [1,2,3]
    },
    getAccountInfo() {
        //自定义类型
        return {
            name:'yanwei',
            age: 100
        }
    },
    getNowplayingList() {
        return fakeDB
    },
    getFilmDetail(obj) {
        //传递的参数是一个对象{id:1}
        return fakeDB.filter(item=>obj.id == item.id)[0]
    }
}

var app = express()

app.use('/home', (req, res)=>{
    res.send('home data')
})

app.use('/list', (req, res)=>{
    res.send('list data')
})

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true,//查询器
}))

app.listen('3001')