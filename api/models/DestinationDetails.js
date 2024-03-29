const mongoose = require("mongoose")

const DestinationSchema = new mongoose.Schema({
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
        required: true,
    },
    images: [
        {
            data: Buffer,
            contentType: String,
        },
    ],
    starting_point: {
        type: String,
        required: true,
    },
    inclusions: {
        type: [String],
        required: true,
    },
    exclusions: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("DestinationDetails", DestinationSchema)
