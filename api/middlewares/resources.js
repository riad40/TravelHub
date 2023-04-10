const Destination = require("../models/Destination")

const getOneDestination = async (req, res, next, id) => {
    try {
        const destination = await Destination.findById(id)
        if (!destination) {
            return res.status(404).json({ msg: "Destination not found" })
        }
        req.destination = destination
        next()
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    getOneDestination,
}
