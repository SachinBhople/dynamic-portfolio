const mongoose = require("mongoose")
const technologySchema = new mongoose.Schema({
    name: { type: String },
    category: { type: String },
}, { timestamps: true })

module.exports = mongoose.model("technology", technologySchema)