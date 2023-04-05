const router = require("express").Router()

const {
    createDestination,
    getAllDestinations,
    getDestination,
    updateDestination,
    deleteDestination,
} = require("../controllers/destinationsController")

// create a destination
router.post("/", createDestination)

// get all destinations
router.get("/", getAllDestinations)

// get a destination
router.get("/:id", getDestination)

// update a destination
router.put("/:id", updateDestination)

// delete a destination
router.delete("/:id", deleteDestination)

module.exports = router
