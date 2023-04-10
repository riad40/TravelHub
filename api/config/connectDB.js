const mongoose = require("mongoose")

const connectDB = () => {
    mongoose
        .connect(process.env.DB_URI_LOCAL)
        .then(() => {
            console.log(`connected to ${process.env.DB_URI_LOCAL} successfully`)
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = connectDB
