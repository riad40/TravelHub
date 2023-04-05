const router = require("express").Router()

const {
    createProgram,
    updateProgram,
    deleteProgram,
    getPrograms,
    getProgram,
} = require("../controllers/programController")

router.route("/").get(getPrograms).post(createProgram)

router.route("/:id").get(getProgram).put(updateProgram).delete(deleteProgram)

module.exports = router
