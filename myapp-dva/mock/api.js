export default {
    'GET /users': {
        name:'yanwei',age:18
    },
    "POST /users/login":(req, res)=>{
        console.log(req.body)
        res.send({ok:1})
    }
}