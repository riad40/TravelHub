const Destination = require("../models/Destination")

/**
 * @route   POST api/destinations
 * @desc    create a destination
 * @access  private
 */
const createDestination = async (req, res) => {
    // check for the body and file
    if (!req.body || !req.file) {
        return res.status(400).json({
            message: "Please fill all the fields",
        })
    }

    // destructure the request body
    const { name, description, price, location, climate } = req.body

    try {
        // create a new destination
        const newDestination = new Destination({
            name,
            description,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
            price,
            location,
            climate,
        })

        // save the destination to the database
        const destination = await newDestination.save()

        // send the destination as a response
        res.json(200, {
            message: "Destination created successfully",
            destination,
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all destinations
const getAllDestinations = async (req, res) => {
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
const getDestination = async (req, res) => {
    try {
        // get the destination
        const destination = req.destination
        // send the destination as a response
        res.json(200, {
            message: "Destination fetched successfully",
            destination,
        })
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
const updateDestination = async (req, res) => {
    // check for the body and file
    if (!req.body || !req.file) {
        return res.status(400).json({
            message: "Please fill all the fields",
        })
    }

    // destructure the request body
    const { name, description, price, location, climate } = req.body

    try {
        // update the destination
        let destination = await Destination.updateOne(
            {
                _id: req.destination._id,
            },
            {
                $set: {
                    name,
                    description,
                    image: {
                        data: req.file.buffer,
                        contentType: req.file.mimetype,
                    },
                    price,
                    location,
                    climate,
                },
            },
            { new: true }
        )

        // send the updated destination as a response
        res.json(200, {
            message: "Destination updated successfully",
            destination,
        })
    } catch (err) {
        console.error(err.message)

        res.status(500).send("Server Error")
    }
}

// delete a destination
const deleteDestination = async (req, res) => {
    try {
        // delete the destination
        await Destination.deleteOne({ _id: req.destination._id })

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
