const router = require("express").Router()

const {
    createReview,
    getReviewsByDestination,
    getReviewsByUser,
} = require("../controllers/reviewController")

const authChecker = require("../middlewares/authChecker")
const validate = require("../middlewares/bodyValidator")

router.route("/").post(authChecker, validate("createReview"), createReview)

router.route("/:id").get(getReviewsByDestination)

router.route("/user/:id").get(getReviewsByUser)

module.exports = router
