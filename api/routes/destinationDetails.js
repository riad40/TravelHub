const router = require("express").Router()

const {
    createDestinationDetails,
    getAllDestinationDetails,
    getDestinationDetails,
    updateDestinationDetails,
    deleteDestinationDetails,
} = require("../controllers/destinationDetailsController")

const authChecker = require("../middlewares/authChecker")
const roleChecker = require("../middlewares/roleChecker")
const upload = require("../middlewares/uploadImage")

// create a destination details
router
    .route("/")
    .post(
        authChecker,
        roleChecker("travel_agent"),
        upload.array("images", 5),
        createDestinationDetails
    )

// get all destination details
router.route("/").get(getAllDestinationDetails)

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

// delete a destination details
router
    .route("/:id")
    .delete(authChecker, roleChecker("travel_agent"), deleteDestinationDetails)

module.exports = router
