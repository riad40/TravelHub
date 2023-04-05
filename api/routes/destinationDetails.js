const router = require("express").Router()

const {
    createDestinationDetails,
    getAllDestinationDetails,
    getDestinationDetails,
    updateDestinationDetails,
    deleteDestinationDetails,
} = require("../controllers/destinationDetailsController")

// create a destination details
router.post("/", createDestinationDetails)

// get all destination details
router.get("/", getAllDestinationDetails)

// get a destination details
router.get("/:id", getDestinationDetails)

// update a destination details
router.put("/:id", updateDestinationDetails)

// delete a destination details
router.delete("/:id", deleteDestinationDetails)

module.exports = router
