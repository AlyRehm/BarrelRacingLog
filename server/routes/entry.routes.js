const EntryController = require("../controllers/entry.contoller");

module.exports = app => {
    app.post("/api/entries", EntryController.createNewEntry);
    app.get("/api/entries", EntryController.findAllEntries);
    app.get("/api/horses/:horseId/entries", EntryController.findAllEntriesByHorseId);
    app.get("/api/entries/:id", EntryController.findOneEntry);
    app.put("/api/entries/:id", EntryController.updateEntry);
    app.delete("/api/entries/:id", EntryController.deleteEntry);
    // app.get("/api/entries/horse/:horseId", EntryController.findAllByHorseId);
}