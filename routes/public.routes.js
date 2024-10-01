const public = require("../controllers/public.controller")



const router = require("express").Router()



router
    .get("/get-carsouel", public.getPublicCarsouel)
    .get("/get-projects", public.getPublicProjects)
    .get("/get-projects/details/:id", public.getPublicProjectsDetails)

    .get("/get-enquery", public.getEnquery)
    .post("/create-enquery", public.createEnquery)
    .delete("/detele-enquery/:id", public.deleteEnquery)

module.exports = router