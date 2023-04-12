const router = require("express").Router()
const {
    login,
    register,
    verifyEmail,
} = require("../controllers/authController")
const validate = require("../middlewares/bodyValidator")

router.route("/register").post(validate("register"), register)
router.route("/login").post(validate("login"), login)
router.route("/verify/:token").get(verifyEmail)

module.exports = router
