const express = require('express')
const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
//描述 
// Account 自定义类型；getFilmDetail(id:Int!)传参，！为必须穿
var Schema = buildSchema(`
    type Film {
        id:Int,
        name:String,
        poster:String,
        price:Int
    }
    input InputFilm {
        name:String,
        poster:String,
        price:Int
    }
    type Query {
        getNowplayingList: [Film],
    }
    type Mutation {
        createFilm(input:InputFilm):Film,
        updateFilm(id:Int!,input:InputFilm):Film,
        deleteFilm(id:Int!):Int,
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
    getNowplayingList() {
        return fakeDB
    },
    createFilm({input}) {
        let obj = {...input, id:fakeDB.length+1}
        fakeDB.push(obj)
        return obj
    },
    updateFilm({id ,input}) {
        let obj = fakeDB.filter(item=>item.id==id)[0]
        for(let k in input) {
            obj[k] = input[k]
        }
        return obj
    },
    deleteFilm({id}) {
        fakeDB = fakeDB.filter(item=>item.id!=id)
        return 1
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