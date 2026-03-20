const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const route = require('./routers/route')
dotenv.config()
require('./db')

const app = express()

app.use(cors())


app.use(express.json())

app.use(route)

app.listen(2000,()=>{
    console.log("server running on port 2000");
    
})
