const Booking = require("../models/Booking")
const { validationResult } = require("express-validator")

/**
 * @desc  create booking
 * @route POST /api/bookings
 * @access Private
 */

const createBooking = async (req, res) => {
    // check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { destination, travelAgent, paymentId, status, user } = req.body

    try {
        // create booking
        const booking = new Booking({
            user,
            destination,
            travelAgent,
            paymentId,
            status,
        })

        await booking.save()

        // send response to client
        res.status(201).json({
            data: booking,
            msg: "Booking created successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Server Error",
        })
    }
}

/**
 * @desc  get bookings
 * @route GET /api/bookings
 * @access Private
 * @access Travel Agent
 */

const getBookings = async (req, res) => {
    try {
        // get bookings
        const bookings = await Booking.find()
            .populate("user", "name")
            .populate("destination", "name")

        // send response to client
        res.status(200).json({
            data: bookings,
            msg: "Bookings retrieved successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Server Error",
        })
    }
}

/**
 * @desc  get booking
 * @route GET /api/bookings/:id
 * @access Private
 * @access Travel Agent
 * @access User
 */

const getBooking = async (req, res) => {
    try {
        // get booking
        const booking = req.booking

        // send response to client
        res.status(200).json({
            data: booking,
            msg: "Booking retrieved successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Server Error",
        })
    }
}

/**
 * @desc  update booking status
 * @route PUT /api/bookings/:id
 * @access Private
 * @access Travel Agent
 */

const updateBookingStatus = async (req, res) => {
    try {
        // get booking
        const booking = req.booking

        // update booking status
        booking.status = req.body.status

        await booking.save()

        // send response to client
        res.status(200).json({
            data: booking,
            msg: "Booking updated successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Server Error",
        })
    }
}

/**
 * @desc  cancel booking
 * @route DELETE /api/bookings/:id
 * @access Private
 * @access User
 * @access Travel Agent
 */

const cancelBooking = async (req, res) => {
    try {
        // get booking
        const booking = req.booking

        // delete booking
        await booking.remove()

        // send response to client
        res.status(200).json({
            msg: "Booking deleted successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Server Error",
        })
    }
}

/**
 * @desc  get bookings by user
 * @route GET /api/bookings/user/:id
 * @access Private
 * @access User
 * @access Travel Agent
 */

const getBookingsByUser = async (req, res) => {
    try {
        // get bookings
        const bookings = await Booking.find({ user: req.params.id }).populate(
            "destination",
            "name"
        )

        // send response to client
        res.status(200).json({
            data: bookings,
            msg: "Bookings retrieved successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Server Error",
        })
    }
}

/**
 * @desc  get bookings by destination
 * @route GET /api/bookings/destination/:id
 * @access Private
 * @access Travel Agent
 */

const getBookingsByDestination = async (req, res) => {
    try {
        // get bookings
        const bookings = await Booking.find({
            destination: req.params.id,
        }).populate("user", "name")

        // send response to client
        res.status(200).json({
            data: bookings,
            msg: "Bookings retrieved successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Server Error",
        })
    }
}

module.exports = {
    createBooking,
    getBookings,
    getBooking,
    updateBookingStatus,
    cancelBooking,
    getBookingsByUser,
    getBookingsByDestination,
}
