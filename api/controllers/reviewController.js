const Review = require("../models/Review")
const { validationResult } = require("express-validator")

// create a new review
const createReview = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, rating, comment, destination, user } = req.body

    try {
        const newReview = new Review({
            name,
            rating,
            comment,
            destination,
            user,
        })

        const review = await newReview.save()

        res.json(review)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all reviews by destination
const getReviewsByDestination = async (req, res) => {
    try {
        const reviews = await Review.find({ destination: req.params.id })
            .sort({
                date: -1,
            })
            .populate("user", ["username"])

        res.json(reviews)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all reviews by user
const getReviewsByUser = async (req, res) => {
    try {
        const reviews = await Review.find({ user: req.params.id })
            .sort({
                date: -1,
            })
            .populate("destination", ["name"])

        res.json(reviews)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    createReview,
    getReviewsByDestination,
    getReviewsByUser,
}
