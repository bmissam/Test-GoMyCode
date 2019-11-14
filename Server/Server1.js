const dotenv = require('dotenv')
dotenv.config()
const express = require("express")
const bodyParser = require("body-parser")

const cors = require('cors');
const mongoose = require('mongoose');
const UserRoute = require('./Routes/User')
const PhotoRoute = require('./Routes/Photo')







mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true },()=>
console.log('db Connected'));


const app = express();

app.use(cors());

app.use(bodyParser.json())





app.use(UserRoute)
app.use(PhotoRoute)




app.listen(3007, err => {
    if (err) console.log("Server is not running")
    else console.log("Server is running ")

})


