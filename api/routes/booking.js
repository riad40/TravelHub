const router = require("express").Router()

const {
    createBooking,
    getBookings,
    getBooking,
    updateBookingStatus,
    cancelBooking,
    getBookingsByUser,
    getBookingsByDestination,
} = require("../controllers/bookingController")

const validate = require("../middlewares/bodyValidator")
const authChecker = require("../middlewares/authChecker")
const roleChecker = require("../middlewares/roleChecker")

// @route   POST api/bookings
router
    .route("/")
    .post(
        authChecker,
        roleChecker(["customer"]),
        validate("createBooking"),
        createBooking
    )

// @route   GET api/bookings
router.route("/").get(authChecker, roleChecker(["travel_agent"]), getBookings)

// @route   GET api/bookings/:id
router
    .route("/:id")
    .get(authChecker, roleChecker(["travel_agent", "customer"]), getBooking)

// @route   PUT api/bookings/:id
router
    .route("/:id")
    .put(
        authChecker,
        roleChecker(["travel_agent"]),
        validate("updateBookingStatus"),
        updateBookingStatus
    )

// @route   DELETE api/bookings/:id
router
    .route("/:id")
    .delete(
        authChecker,
        roleChecker(["travel_agent", "customer"]),
        cancelBooking
    )

// @route   GET api/bookings/user/:id
router
    .route("/user/:id")
    .get(
        authChecker,
        roleChecker(["customer", "travel_agent"]),
        getBookingsByUser
    )

// @route   GET api/bookings/destination/:id
router
    .route("/destination/:id")
    .get(authChecker, roleChecker(["travel_agent"]), getBookingsByDestination)

module.exports = router
