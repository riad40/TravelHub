const DestinationDetails = require("../models/DestinationDetails")

// create a destination details
const createDestinationDetails = async (req, res) => {
    // destructure the request body
    const { start_date, end_date, starting_point, inclusions, exclusions } =
        req.body

    try {
        // create a new destination details
        const newDestinationDetails = new DestinationDetails({
            start_date,
            end_date,
            destination: req.params.id,
            images: req.files.map((file) => ({
                data: file.buffer,
                contentType: file.mimetype,
            })),
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

// get a destination details
const getDestinationDetails = async (req, res) => {
    try {
        // find the destination details by id
        const destinationDetails = await DestinationDetails.findOne({
            destination: req.params.id,
        })

        console.log(req.params.id)

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
const updateDestinationDetails = async (req, res) => {
    // destructure the request body
    const { start_date, end_date, starting_point, inclusions, exclusions } =
        req.body

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
        destinationDetails = await DestinationDetails.updateOne(
            {
                _id: req.params.id,
            },
            {
                $set: {
                    start_date,
                    end_date,
                    destination: req.params.id,
                    images: req.files.map((file) => ({
                        data: file.buffer,
                        contentType: file.mimetype,
                    })),
                    starting_point,
                    inclusions,
                    exclusions,
                },
            },
            { new: true }
        )

        // send the destination details as a response
        res.json(destinationDetails)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    createDestinationDetails,
    getDestinationDetails,
    updateDestinationDetails,
}
