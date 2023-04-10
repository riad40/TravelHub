const Role = require("../models/Role")
const User = require("../models/User")
const bcrypt = require("bcryptjs")

const initDB = async () => {
    try {
        // create the roles if they don't exist
        const rolesCount = await Role.countDocuments()
        if (rolesCount > 0) return

        const roles = await Role.insertMany([
            { role: "travel_agent" },
            { role: "customer" },
        ])

        // create the default travel agent if it doesn't exist
        const travelAgentCount = await User.countDocuments({
            username: process.env.TRAVEL_AGENT_USERNAME,
        })

        if (travelAgentCount > 0) return

        // hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(
            process.env.TRAVEL_AGENT_PASSWORD,
            salt
        )

        const travelAgent = new User({
            username: process.env.TRAVEL_AGENT_USERNAME,
            email: process.env.TRAVEL_AGENT_EMAIL,
            password: hashedPassword,
            role: [roles[0]._id],
        })

        await travelAgent.save()
    } catch (error) {
        console.log(error)
    }
}

module.exports = initDB
