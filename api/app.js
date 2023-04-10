require("dotenv").config()
const connectDB = require("./config/connectDB")
const initDB = require("./config/initDB")
const express = require("express")
const cors = require("cors")

const app = express()

// connect to database
connectDB()

// create roles && travel agent
initDB()

// middlwares for handling or parsing incoming requests
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors({ origin: true, credentials: true }))

const authRouter = require("./routes/auth")
const destinationRouter = require("./routes/destination")

app.use("/api/auth", authRouter)
app.use("/api/destinations", destinationRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})

module.exports = app
