const express = require("express");
const app = express();
const port = 3000;

const mongodb = require("./config/db")
const coachRouter = require("./router/coachRouter")
const studentRouter = require("./router/studentRouter");
const authMiddleware = require("./middleware/authMidlleware")
app.use(express.json())
mongodb()

app.get("/health",(req,res)=>{
    res.send("hello World")
})

app.use(coachRouter)
app.use(authMiddleware,studentRouter)




app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})