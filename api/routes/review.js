const router = require("express").Router()

const {
    createReview,
    getReviewsByDestination,
    getReviewsByUser,
} = require("../controllers/reviewController")

router.route("/").post(createReview)

router.route("/:id").get(getReviewsByDestination)

router.route("/user/:id").get(getReviewsByUser)

module.exports = router
