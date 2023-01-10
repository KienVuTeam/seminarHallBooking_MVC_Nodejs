const express = require('express')
// const { Connection } = require('mongoose')
const router = express.Router()

//import controllers define
const HomeController = require('../app/controllers/HomeController')
//import class define
const conn = require('../database/mongodb_config')
//import module connect db define
const conn2 = require('../database/mongodb_config2')


//--------------------
//use controller from export class HomeController
router.get('/controller', new HomeController().run)
router.get('/db', (req, res)=>{
    //connect DB
    new conn().getConnection()
    // conn2.getConnection()
    res.send('connect DB')
})
router.get('/', (req, res)=>{
    res.send('hello ...........')
})


module.exports =router
