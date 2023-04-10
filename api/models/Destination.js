const mongoose = require("mongoose")

const DestinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    climate: {
        type: String,
        enum: ["Hot", "Cold", "Rainy", "Dry"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Destination", DestinationSchema)
