const jwt = require("jsonwebtoken")

// make sure the user is logged in - Authentication
const authChecker = (req, res, next) => {
    // get the token from the authorization header
    const token = req.header("authorization")?.split(" ")[1]

    // check if the token exists
    if (!token) {
        return res.status(401).json({ message: "log in first" })
    }
    // verify the token
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "invalid token" })
    }
}

module.exports = authChecker
