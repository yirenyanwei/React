//链接数据库
var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/maizuo', { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    console.log('connect')
}, err=>{
    console.log('connect err')
})

const Schema = mongoose.Schema;
//film集合描述
const FilmSchema = new Schema({
    name:String,
    poster:String,
    price:Number
})
var FilmModel = mongoose.model('film', FilmSchema)
module.exports.FilmModel = FilmModel