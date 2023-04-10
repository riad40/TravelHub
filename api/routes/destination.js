const router = require("express").Router()

const {
    createDestination,
    getAllDestinations,
    getDestination,
    updateDestination,
    deleteDestination,
} = require("../controllers/destinationsController")

const authChecker = require("../middlewares/authChecker")
const roleChecker = require("../middlewares/roleChecker")
const upload = require("../middlewares/uploadImage")
const { getOneDestination } = require("../middlewares/resources")

// create a destination
router
    .route("/")
    .post(
        authChecker,
        roleChecker("travel_agent"),
        upload.single("image"),
        createDestination
    )

// get all destinations
router.route("/").get(getAllDestinations)

// get a destination
router.route("/:id").get(getDestination)

// update a destination
router
    .route("/:id")
    .put(
        authChecker,
        roleChecker("travel_agent"),
        upload.single("image"),
        updateDestination
    )

// delete a destination
router
    .route("/:id")
    .delete(authChecker, roleChecker("travel_agent"), deleteDestination)

router.param("id", getOneDestination)

module.exports = router
