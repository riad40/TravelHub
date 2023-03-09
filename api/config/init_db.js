const Roles = require("../models/Role");

const roles = ["customer", "travel agent"];

exports.setDefaultRoles = async () => {
    try {
        const count = await Roles.countDocuments();
        if (count === 0) {
            roles.forEach(async (role) => {
                const saveRole = new Roles({ role });
                await saveRole.save();
            });
        }
    } catch (err) {
        process.exit(1);
    }
};
