const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/imooc'
const app = express()
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
    console.log('mongo connect is success')
})
const User = mongoose.model('user',new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true}
}))

User.create({
    name:'imooc',
    age:18
},function (err, doc) {
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
app.get('/data',function (req, res) {
    User.findOne({},function (err, doc) {
        if(err) throw err
        res.json(doc)
    })
})
User.remove({age:18},function (err, doc) {
    console.log(doc)
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})
app.listen(9093,function () {
    console.log('Node app start at port 9093')
})