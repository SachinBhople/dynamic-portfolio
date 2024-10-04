const public = require("../controllers/public.controller")
const { rateLimit } = require("express-rate-limit")


const router = require("express").Router()



router
    .get("/get-carsouel", public.getPublicCarsouel)
    .get("/get-projects", public.getPublicProjects)
    .get("/get-projects/details/:id", public.getPublicProjectsDetails)

    .get("/get-enquery", public.getEnquery)
    .post("/create-enquery", rateLimit({ windowMs: 15 * 60 * 1000, limit: 1 }), public.createEnquery)
    .delete("/detele-enquery/:id", public.deleteEnquery)

module.exports = router