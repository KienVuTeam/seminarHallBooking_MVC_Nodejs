const express = require('express')
const app = express()
const port =8000
const http = require('http')
const path = require('path')
const router = require('./routes')
const  template = require('express-handlebars')
const bodyParser = require('body-parser')
const logger =require('morgan')
const conn = require('./database/mongodb_config2')
//new syntax--------------
// import bodyParser from 'body-parser';
// import logger from 'morgan';
// import define libraries 
// const route = require('./routes') !!!ko dung

//static
app.use(express.static(path.join(__dirname, 'public')))
//chuyen instance app(app == express) vao function trong file index route
router(app)
//connect DB
// conn.getConnection()
//setup template engine 
app.engine('handlebars', template.engine())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname, 'resources/views'))

//setup dependencies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

//default
// console.log('path default: '+path.join(__dirname, 'resources/views'))
app.use('/first', (req, res)=>{
    res.send('xay dung app booking room')
})

//run server
http.createServer(app).listen(port)
console.log(`app running om port: http://localhost:${port}`)