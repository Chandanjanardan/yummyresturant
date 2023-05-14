const express = require("express")
const UserRouter = express.Router()

const { 
    registerController,
    about
} = require("../controller/usercontroller")

// const {rights,userbyrole} = require("../controllers/Rightcontroller")
// UserRouter.post("/right",rights)
// UserRouter.post("/getuserbyrole",userbyrole)

UserRouter.post("/register",registerController)
// UserRouter.post("/login",userLogin)
UserRouter.get("/about",about)

module.exports = UserRouter