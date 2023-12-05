const express = require("express")
const useragent = require("express-useragent")
const cors = require("cors")
const mongoose = require("mongoose")

let app = express()
var user =require("./routes/userRoutes")
const { connect } = require("http2")

mongoose.connect(process.env.MONGOURL || 'mongodb+srv://gladsonmathew7:Gladson2002@cluster0.v6ublgo.mongodb.net/?retryWrites=true&w=majority',
    {newUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connected to database")}
).catch((err)=>
{console.log(err)})

var port = process.env.PORT || 4002

app.use(cors)
app.use(useragent.express())

const server = app.listen(port,function(){
    console.log(`server is running on ${port}`)
})
app.use(user)