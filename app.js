require('dotenv').config();
const express = require('express')
const app = express()
const logger =require('morgan')
const session = require('express-session')
const path = require('path')
const connectDB = require('./config/db')



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// path init for static files
app.use(express.static(path.join(__dirname, '/public/')))


//Connect to Mongo DB
connectDB();


//Morgan Init
app.use(logger('dev'))


//Routes
const defaultRoutes = require('./routes/default.routes')

app.use('/', defaultRoutes)


//Configure Express Session

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req,res) =>{
    console.log(`Server Started at Port ${PORT}`)
})