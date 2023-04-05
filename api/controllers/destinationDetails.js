const DestinationDetails = require("../models/DestinationDetails")
const { validationResult } = require("express-validator")

// create a destination details
const createDestinationDetails = async (req, res, next) => {
    // check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // destructure the request body
    const {
        start_date,
        end_date,
        destination,
        program,
        images,
        starting_point,
        inclusions,
        exclusions,
    } = req.body

    try {
        // create a new destination details
        const newDestinationDetails = new DestinationDetails({
            start_date,
            end_date,
            destination,
            program,
            images,
            starting_point,
            inclusions,
            exclusions,
        })

        // save the destination details to the database
        const destinationDetails = await newDestinationDetails.save()

        // send the destination details as a response
        res.json(destinationDetails)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all destination details
const getAllDestinationDetails = async (req, res, next) => {
    try {
        // find all destination details
        const destinationDetails = await DestinationDetails.find()

        // send the destination details as a response
        res.json(destinationDetails)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get a destination details
const getDestinationDetails = async (req, res, next) => {
    try {
        // find the destination details by id
        const destinationDetails = await DestinationDetails.findById(
            req.params.id
        )

        // if the destination details is not found
        if (!destinationDetails) {
            return res
                .status(404)
                .json({ msg: "Destination Details not found" })
        }

        // send the destination details as a response
        res.json(destinationDetails)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// update a destination details
const updateDestinationDetails = async (req, res, next) => {
    // check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // destructure the request body
    const {
        start_date,
        end_date,
        destination,
        program,
        images,
        starting_point,
        inclusions,
        exclusions,
    } = req.body

    // build a destination details object
    const destinationDetailsFields = {}
    if (start_date) destinationDetailsFields.start_date = start_date
    if (end_date) destinationDetailsFields.end_date = end_date
    if (destination) destinationDetailsFields.destination = destination
    if (program) destinationDetailsFields.program = program
    if (images) destinationDetailsFields.images = images
    if (starting_point) destinationDetailsFields.starting_point = starting_point
    if (inclusions) destinationDetailsFields.inclusions = inclusions
    if (exclusions) destinationDetailsFields.exclusions = exclusions

    try {
        // find the destination details by id
        let destinationDetails = await DestinationDetails.findById(
            req.params.id
        )

        // if the destination details is not found
        if (!destinationDetails) {
            return res
                .status(404)
                .json({ msg: "Destination Details not found" })
        }

        // update the destination details
        destinationDetails = await DestinationDetails.findByIdAndUpdate(
            req.params.id,
            { $set: destinationDetailsFields },
            { new: true }
        )

        // send the destination details as a response
        res.json(destinationDetails)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// delete a destination details
const deleteDestinationDetails = async (req, res, next) => {
    try {
        // find the destination details by id
        let destinationDetails = await DestinationDetails.findById(
            req.params.id
        )

        // if the destination details is not found
        if (!destinationDetails) {
            return res
                .status(404)
                .json({ msg: "Destination Details not found" })
        }

        // delete the destination details
        await DestinationDetails.findByIdAndRemove(req.params.id)

        // send a success message as a response
        res.json({ msg: "Destination Details deleted" })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    createDestinationDetails,
    getAllDestinationDetails,
    getDestinationDetails,
    updateDestinationDetails,
    deleteDestinationDetails,
}
