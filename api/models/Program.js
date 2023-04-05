const mongoose = require("mongoose")

const ProgramSchema = new mongoose.Schema({
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    dayRange: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Program", ProgramSchema)
