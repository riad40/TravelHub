const Destination = require("../models/Destination")
const Review = require("../models/Review")
const User = require("../models/User")
const { validationResult } = require("express-validator")

// create a destination
const createDestination = async (req, res, next) => {
    // check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // destructure the request body
    const { name, description, image, price, location, climate } = req.body

    try {
        // create a new destination
        const newDestination = new Destination({
            name,
            description,
            image,
            price,
            location,
            climate,
        })

        // save the destination to the database
        const destination = await newDestination.save()

        // send the destination as a response
        res.json(destination)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all destinations
const getAllDestinations = async (req, res, next) => {
    try {
        // find all destinations
        const destinations = await Destination.find()

        // send the destinations as a response
        res.json(destinations)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get a destination
const getDestination = async (req, res, next) => {
    try {
        // find the destination by id
        const destination = await Destination.findById(req.params.id)

        // if the destination is not found
        if (!destination) {
            return res.status(404).json({ msg: "Destination not found" })
        }

        // send the destination as a response
        res.json(destination)
    } catch (err) {
        console.error(err.message)

        // if the id is not valid
        if (err.kind === "ObjectId") {
            return res.status(404).json({ msg: "Destination not found" })
        }

        res.status(500).send("Server Error")
    }
}

// update a destination
const updateDestination = async (req, res, next) => {
    // check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // destructure the request body
    const { name, description, image, price, location, climate } = req.body

    // build a destination object
    const destinationFields = {}
    if (name) destinationFields.name = name
    if (description) destinationFields.description = description
    if (image) destinationFields.image = image
    if (price) destinationFields.price = price
    if (location) destinationFields.location = location
    if (climate) destinationFields.climate = climate

    try {
        // find the destination by id
        let destination = await Destination.findById(req.params.id)

        // if the destination is not found
        if (!destination) {
            return res.status(404).json({ msg: "Destination not found" })
        }

        // update the destination
        destination = await Destination.findByIdAndUpdate(
            req.params.id,
            { $set: destinationFields },
            { new: true }
        )

        // send the updated destination as a response
        res.json(destination)
    } catch (err) {
        console.error(err.message)

        // if the id is not valid
        if (err.kind === "ObjectId") {
            return res.status(404).json({ msg: "Destination not found" })
        }

        res.status(500).send("Server Error")
    }
}

// delete a destination
const deleteDestination = async (req, res, next) => {
    try {
        // find the destination by id
        const destination = await Destination.findById(req.params.id)

        // if the destination is not found
        if (!destination) {
            return res.status(404).json({ msg: "Destination not found" })
        }

        // delete the destination
        await Destination.findByIdAndRemove(req.params.id)

        // send a success message as a response
        res.json({ msg: "Destination removed" })
    } catch (err) {
        console.error(err.message)

        // if the id is not valid
        if (err.kind === "ObjectId") {
            return res.status(404).json({ msg: "Destination not found" })
        }

        res.status(500).send("Server Error")
    }
}

module.exports = {
    createDestination,
    getAllDestinations,
    getDestination,
    updateDestination,
    deleteDestination,
}
