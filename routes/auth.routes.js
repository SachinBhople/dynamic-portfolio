const router = require("express").Router()
const auth = require("./../controllers/auth.controller")

router
    .post("/register", auth.registerUser)
    .post("/login", auth.loginUser)
    .post("/logout", auth.logoutUser)
module.exports = router