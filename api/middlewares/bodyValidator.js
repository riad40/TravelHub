const { check } = require("express-validator")

const validate = (method) => {
    switch (method) {
        case "register": {
            return [
                check("username", "username is required").not().isEmpty(),
                check("email", "please enter a valid email").isEmail(),
                check(
                    "password",
                    "please enter a password with 6 or more characters"
                ).isLength({ min: 6 }),
            ]
        }
        case "login": {
            return [
                check("email", "please enter a valid email").isEmail(),
                check("password", "password is required").exists().notEmpty(),
            ]
        }
        case "createReview": {
            return [
                check("name", "name is required").not().isEmpty(),
                check("rating", "rating is required").not().isEmpty(),
                check("comment", "comment is required").not().isEmpty(),
                check("destination", "destination is required").not().isEmpty(),
                check("user", "user is required").not().isEmpty(),
            ]
        }
    }
}

module.exports = validate
