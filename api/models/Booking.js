const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Destination",
    },
    paymentId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["pending", "success", "failed"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Booking", bookingSchema)
