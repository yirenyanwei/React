const {FilmModel} = require('./db')
const express = require('express')
const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
//描述 
// Account 自定义类型；getFilmDetail(id:Int!)传参，！为必须穿
var Schema = buildSchema(`
    type Film {
        id:String,
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
        getNowplayingOne(id:String!): [Film],
    }
    type Mutation {
        createFilm(input:InputFilm):Film,
        updateFilm(id:String!,input:InputFilm):Film,
        deleteFilm(id:String!):Int,
    }
`)
//处理器
const root = {
    getNowplayingList() {
        return FilmModel.find()
    },
    getNowplayingOne({id}) {
        return FilmModel.find({_id:id})
    },
    createFilm({input}) {
        //graphQL支持return Promise对象
        return FilmModel.create({...input})
    },
    updateFilm({id ,input}) {
        return FilmModel.updateOne({
            _id:id
        }, {...input}).then(res=>{
            return FilmModel.findOne({_id:id})
        })
    },
    deleteFilm({id}) {
        return FilmModel.deleteOne({_id:id}).then(res=>1)
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

//配置静态目录
app.use(express.static('public'))

app.listen('3001')