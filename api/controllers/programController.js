const Program = require("../models/Program")

// create a new program
const createProgram = async (req, res) => {
    const { destination, name, description, dayRange } = req.body

    try {
        const newProgram = new Program({
            destination,
            name,
            description,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
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
    const { name, description, dayRange } = req.body

    try {
        let program = await Program.findById(req.params.id)

        if (!program) return res.status(404).json({ msg: "Program not found" })

        program = await Program.updateOne(
            {
                _id: req.params.id,
            },
            {
                $set: {
                    name,
                    description,
                    dayRange,
                    image: {
                        data: req.file.buffer,
                        contentType: req.file.mimetype,
                    },
                },
            },
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
    deleteProgram,
}
