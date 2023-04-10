const router = require("express").Router()

const {
    createProgram,
    updateProgram,
    deleteProgram,
    getProgram,
} = require("../controllers/programController")

const authChecker = require("../middlewares/authChecker")
const roleChecker = require("../middlewares/roleChecker")
const upload = require("../middlewares/uploadImage")

router.route("/").post(createProgram)

router.route("/:id").get(getProgram).put(updateProgram).delete(deleteProgram)

module.exports = router
