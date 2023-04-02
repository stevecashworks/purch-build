const path=require('path')
const express=require('express')
const dotenv=require("dotenv")
dotenv.config()
 const App=express()
 App.use(express.static(path.join(__dirname,'build')))
App.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"build/index.html"))

})
const port =process.env.port||5001

App.listen(3000,()=>{ console.log(`server  is listening on port 3000`)})

