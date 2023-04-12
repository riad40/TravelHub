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
    passangers: [
        {
            fullName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone: {
                type: String,
                required: true,
            },
        },
    ],
})

module.exports = mongoose.model("Booking", bookingSchema)
