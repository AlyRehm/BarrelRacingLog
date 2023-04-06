const EntryController = require("../controllers/entry.contoller");

module.exports = app => {
    app.post("/api/barrelracinglog/newEntry", EntryController.createNewEntry);
    app.get("/api/barrelracinglog/allEntries", EntryController.findAllEntries);
    app.get("/api/barrelracinglog/:id", EntryController.findOneEntry);
    app.put("/api/barrelracinglog/:id", EntryController.updateEntry);
    app.delete("/api/barrelracinglog/:id", EntryController.deleteEntry);
}