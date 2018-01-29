const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user')
Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})
Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body
    User.findOne({user: user}, function (err, doc) {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({user, type, pwd: md5Pwd(pwd)}, function (err, doc) {
            if (err) return res.json({code: 1, msg: '后端出错了'})
            res.cookie('userid', doc._id)
            return res.json({code: 0})
        })
    })
})
Router.get('/info', function (req, res) {
    // 用户有没有cookie
    const userid = req.cookies.userid
    if (!userid) {
        return res.json({code: 1})
    }
    User.findOne({_id: userid}, {pwd: 0,__v:0}, function (e, d) {
        if (e) return res.json({code: 1, msg: '后端出错了'})
        return res.json({code: 0, data: d})
    })
})
Router.post('/login', function (req, res) {
    const {user, pwd} = req.body
    User.findOne({user: user, pwd: md5Pwd(pwd)}, {pwd: 0}, function (err, doc) {
        if (!doc) {
            return res.json({code: 1, msg: '用户名不存在或者密码错误'})
        }
        res.cookie('userid', doc._id)
        return res.json({code: 0, data: doc})
    })
})

function md5Pwd(pwd) {
    const salt = 'shenchao_is_wzh'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router