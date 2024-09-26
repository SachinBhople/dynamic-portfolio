const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const path = require("path")
const { adminProtected } = require("./middlewares/protected")


const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// routes
app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/admin", adminProtected, require("./routes/admin.routes"))
app.use("/api/public", require("./routes/public.routes"))

// 404
app.use("*", (req, res) => {
    // if opt for mern stack with same hosting
    // res.sendFile(path.join(__dirname, "dist", "index.html"))
    res.status(404).json({ message: "Resource not found" })
})

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "something went wrong" })
})


// server
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO DB CONNECTED")
    app.listen(process.env.PORT, console.log(`SERVER RUNNING: http://localhost:${process.env.PORT}`))
})