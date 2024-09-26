const asyncHanlder = require("express-async-handler")
const Carousel = require("../models/Carousel")
const Projects = require("../models/Projects")


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