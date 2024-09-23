const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    }
})
const projectStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const fn = Date.now() + path.extname(file.originalname)
        cb(null, fn)
    }
})

const upload = multer({ storage }).single("hero")

const projectUpload = multer({ storage: projectStorage }).fields([
    { name: "hero", maxCount: 1 },
    { name: "screenshots-web-main", maxCount: 1 },
    { name: "screenshots-web-other", maxCount: 5 },
    { name: "screenshots-mobile-main", maxCount: 1 },
    { name: "screenshots-mobile-other", maxCount: 5 },
    { name: "sections-web-hero", maxCount: 1 },
    { name: "sections-mobile-hero", maxCount: 1 },
])

module.exports = { upload, projectUpload }