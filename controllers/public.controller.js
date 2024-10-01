const asyncHanlder = require("express-async-handler")
const Carousel = require("../models/Carousel")
const Projects = require("../models/Projects")
const Inquiry = require("../models/Inquiry")


exports.getPublicCarsouel = asyncHanlder(async (req, res) => {
    const result = await Carousel.find()
    res.status(200).json({ message: "fetch Carousel Success", result })
})
exports.getPublicProjects = asyncHanlder(async (req, res) => {
    const result = await Projects.find()
    res.status(200).json({ message: "fetch Projects Success", result })
})
exports.getPublicProjectsDetails = asyncHanlder(async (req, res) => {
    const result = await Projects.findById(req.params.id)
    res.status(200).json({ message: "fetch Projects Success", result })
})

exports.getEnquery = asyncHanlder(async (req, res) => {
    const result = await Inquiry.find()
    res.json({ message: "enquery fetch Success", result })
})
exports.createEnquery = asyncHanlder(async (req, res) => {
    await Inquiry.create(req.body)
    res.json({ message: "enquery Added Success" })
})
exports.deleteEnquery = asyncHanlder(async (req, res) => {
    const { id } = req.params
    await Inquiry.findByIdAndDelete(id)
    res.json({ message: "enquery delete Success" })
})