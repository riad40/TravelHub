const mongoose = require("mongoose")

const ItinerarySchema = new mongoose.Schema({
    destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    dayRange: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Itinerary", ItinerarySchema)
