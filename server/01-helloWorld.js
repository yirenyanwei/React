const express = require('express')
const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
//描述
var Schema = buildSchema(`
    type Query {
        hello: String,
        getName: String,
        getAge: Int,
    }
`)
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