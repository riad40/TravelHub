const Itinerary = require("../models/Itinerary")

// create a new Itinerary
const createItinerary = async (req, res) => {
    const { description, dayRange } = req.body

    try {
        const newItinerary = new Itinerary({
            destination: req.params.id,
            description,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
            dayRange,
        })

        const itinerary = await newItinerary.save()

        res.json(itinerary)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all Itinerarys
const updateItinerary = async (req, res) => {
    const { description, dayRange } = req.body

    try {
        let itinerary = await Itinerary.findOne({ destination: req.params.id })

        if (!Itinerary)
            return res.status(404).json({ msg: "Itinerary not found" })

        itinerary = await Itinerary.updateOne(
            {
                destination: req.params.id,
            },
            {
                $set: {
                    description,
                    dayRange,
                    image: {
                        data: req.file.buffer,
                        contentType: req.file.mimetype,
                    },
                    destination: req.params.id,
                },
            },
            { new: true }
        )

        res.json(itinerary)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// delete an itinerary
const deleteItinerary = async (req, res) => {
    try {
        let itinerary = await Itinerary.findOne({ destination: req.params.id })

        if (!itinerary)
            return res.status(404).json({ msg: "Itinerary not found" })

        await Itinerary.deleteOne({ destination: req.params.id })

        res.json({ msg: "Itinerary removed" })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all itineraries of a destination
const getDestinationItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find({
            destination: req.params.id,
        })

        res.json(itineraries)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    createItinerary,
    updateItinerary,
    deleteItinerary,
    getDestinationItineraries,
}
