const User = require("../models/User")
const Role = require("../models/Role")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")

/**
 * @desc    register a user
 * @route   POST /api/auth/register
 * @access  public
 */

const register = async (req, res) => {
    // get the user data from the request body
    const { username, email, password } = req.body

    // check if there are validation errors
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        // check if the user already exists
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "user already exists" })
        }

        // get the user role id
        const userRole = await Role.findOne({ role: "customer" })

        // hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create the user
        const user = new User({
            username,
            email,
            password: hashedPassword,
            role: [userRole._id],
        })
        await user.save()

        // send the response
        res.status(201).json({ message: "user created successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal server error" })
    }
}

/**
 * @desc    login a user
 * @route   POST /api/auth/login
 * @access  public
 */

const login = async (req, res) => {
    // check if there are validation errors
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // get the user data from the request body
    const { email, password } = req.body

    try {
        // check if the user exists
        const userExist = await User.findOne({ email })
        if (!userExist) {
            return res.status(400).json({ message: "user does not exist" })
        }

        // get the user roles
        const roles = await Role.find({ _id: { $in: userExist.role } })

        // check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(
            password,
            userExist.password
        )
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "invalid credentials" })
        }

        // create the token
        const token = jwt.sign(
            { id: userExist._id, roles: userExist.role },
            process.env.JWT_SECRET
        )

        // send the response && set the token in authorization header
        res.status(200)
            .header("authorization", `Bearer ${token}`)
            .json({
                message: "user logged in successfully",
                token,
                user: {
                    id: userExist._id,
                    username: userExist.username,
                    email: userExist.email,
                    roles: roles.map((role) => role.role),
                },
            })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal server error" })
    }
}

module.exports = { register, login }
