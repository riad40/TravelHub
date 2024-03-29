const router = require("express").Router()

const {
    createDestinationDetails,
    getDestinationDetails,
    updateDestinationDetails,
} = require("../controllers/destinationDetailsController")

const authChecker = require("../middlewares/authChecker")
const roleChecker = require("../middlewares/roleChecker")
const upload = require("../middlewares/uploadImage")

// create a destination details
router
    .route("/:id")
    .post(
        authChecker,
        roleChecker("travel_agent"),
        upload.array("images", 5),
        createDestinationDetails
    )

// get a destination details
router.route("/:id").get(getDestinationDetails)

// update a destination details
router
    .route("/:id")
    .put(
        authChecker,
        roleChecker("travel_agent"),
        upload.array("images", 5),
        updateDestinationDetails
    )

module.exports = router
