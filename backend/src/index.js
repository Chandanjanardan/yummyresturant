const express = require("express")
const mongoose = require("mongoose")
const cors= require("cors")
require("dotenv").config()
const UserRouter = require("../src/routes/userroutes")

const app = express()
// app.use(express.urlencoder({extends:true}))

app.use(express.json())
app.use(
    cors({
      origin: "*",
    })
  );


app.get('/test', (req, res) => {
    res.json({
        message:"This is a josn file"
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/yummy")
    .then(() => console.log('Connected to my DB!'));

app.use("/auth", UserRouter)
// http://localhost:5000/auth/register



// const port = process.env.Port
app.listen(3000, () => {
    console.log(`Server running at 3000`)
})