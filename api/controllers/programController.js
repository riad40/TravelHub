const Program = require("../models/Program")
const Destination = require("../models/Destination")
const { validationResult } = require("express-validator")

// create a new program
const createProgram = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { destination, name, description, image, dayRange } = req.body

    try {
        const newProgram = new Program({
            destination,
            name,
            description,
            image,
            dayRange,
        })

        const program = await newProgram.save()

        res.json(program)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all programs
const updateProgram = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, description, image, dayRange } = req.body

    const programFields = {}
    if (name) programFields.name = name
    if (description) programFields.description = description
    if (image) programFields.image = image
    if (dayRange) programFields.dayRange = dayRange

    try {
        let program = await Program.findById(req.params.id)

        if (!program) return res.status(404).json({ msg: "Program not found" })

        program = await Program.findByIdAndUpdate(
            req.params.id,
            { $set: programFields },
            { new: true }
        )

        res.json(program)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get one program
const getProgram = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id)

        if (!program) return res.status(404).json({ msg: "Program not found" })

        res.json(program)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// get all programs
const getPrograms = async (req, res) => {
    try {
        const programs = await Program.find()
        res.json(programs)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

// delete a program
const deleteProgram = async (req, res) => {
    try {
        let program = await Program.findById(req.params.id)

        if (!program) return res.status(404).json({ msg: "Program not found" })

        await Program.findByIdAndRemove(req.params.id)

        res.json({ msg: "Program removed" })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    createProgram,
    updateProgram,
    getProgram,
    getPrograms,
    deleteProgram,
}
