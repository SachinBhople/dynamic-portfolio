const router = require("express").Router()
const admin = require("./../controllers/admin.controller")

router
    .post("/add-tech", admin.addTechnology)
    .get("/get-tech", admin.getTechnology)
    .put("/update-tech/:id", admin.updateTechnology)
    .delete("/delete-tech/:id", admin.deleteTechnology)

    .post("/add-social", admin.addSocial)
    .get("/get-social", admin.getSocial)
    .put("/update-social/:id", admin.updateSocial)
    .delete("/delete-social/:id", admin.deleteSocial)

    .post("/add-carousel", admin.addCarousel)
    .get("/get-carousel", admin.getCarousel)
    .put("/update-carousel/:id", admin.updateCarousel)
    .delete("/delete-carousel/:id", admin.deleteCarousel)

    .post("/add-project", admin.addProject)
    .get("/get-project", admin.getProjects)
    .delete("/delete-project/:id", admin.deleteProjects)


module.exports = router