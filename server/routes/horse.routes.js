const HorseController = require("../controllers/horse.controller");

module.exports = app => {
    app.post("/api/horses", HorseController.createNewHorse);
    app.get("/api/horses", HorseController.findAllHorses);
    app.get("/api/horses/:id", HorseController.findOneHorse);
    app.put("/api/horses/:id", HorseController.updateHorse);
    app.delete("/api/horses/delete/:id", HorseController.deleteHorse);
}