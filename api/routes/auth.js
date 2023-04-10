const router = require("express").Router()
const { login, register } = require("../controllers/authController")
const validate = require("../middlewares/bodyValidator")

router.route("/register").post(validate("register"), register)
router.route("/login").post(validate("login"), login)

module.exports = router
