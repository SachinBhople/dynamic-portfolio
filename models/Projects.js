const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    shortDesc: { type: String, required: true },
    desc: { type: String, required: true },
    duration: { type: String, required: true },
    learning: { type: String, required: true },
    hero: { type: String, required: true },
    screenshots: {
        web: {
            main: { type: String, required: true },
            other: { type: [String] }
        },
        mobile: {
            main: { type: String, required: true },
            other: { type: [String] }
        }
    },
    sections: {
        web: [{ title: String, desc: String, hero: String, }],
        mobile: [{ title: String, desc: String, hero: String, }],
    },
    isMobileApp: { type: Boolean, required: true },
    technologies: {
        frontend: [String],
        backend: [String],
        mobile: [String],
        hosting: [String],
        collaboration: [String],
    },
    source: { type: String, required: true },
    live: { type: String, required: true }

}, { timestamps: true })

module.exports = mongoose.model("project", projectSchema)