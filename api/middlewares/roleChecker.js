const User = require("../models/User")

// make sure the user has the right role - Authorization
const roleChecker = (roles) => {
    return async (req, res, next) => {
        // get the roles from the database
        const dbRoles = await User.findById(req.user.id).populate("role")

        // check if the user has the right role
        const hasRole = dbRoles.role.some((role) => roles.includes(role.role))

        if (!hasRole) {
            return res.status(403).json({ message: "unauthorized" })
        }

        next()
    }
}

module.exports = roleChecker
