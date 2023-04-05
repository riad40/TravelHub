const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
    },
})

module.exports = mongoose.model("Review", ReviewSchema)
