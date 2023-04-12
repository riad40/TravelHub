const router = require("express").Router()

const {
    createItinerary,
    updateItinerary,
    deleteItinerary,
    getDestinationItineraries,
} = require("../controllers/itinerariesController")

const authChecker = require("../middlewares/authChecker")
const roleChecker = require("../middlewares/roleChecker")
const upload = require("../middlewares/uploadImage")

router
    .route("/:id")
    .post(
        authChecker,
        roleChecker("travel_agent"),
        upload.single("image"),
        createItinerary
    )

router
    .route("/:id")
    .put(
        authChecker,
        roleChecker("travel_agent"),
        upload.single("image"),
        updateItinerary
    )

router
    .route("/:id")
    .delete(authChecker, roleChecker("travel_agent"), deleteItinerary)

router.route("/:id").get(getDestinationItineraries)

module.exports = router
