const express = require("express")
const UserRouter = express.Router()

const { 
    registerController,
    // userLogin
} = require("../controller/usercontroller")

// const {rights,userbyrole} = require("../controllers/Rightcontroller")
// UserRouter.post("/right",rights)
// UserRouter.post("/getuserbyrole",userbyrole)

UserRouter.post("/register",registerController)
// UserRouter.post("/login",userLogin)

module.exports = UserRouter