// CRUD METHODS FOR BARREL RACE DETAILS

const RunEntry = require("../models/entry.model");

//CREATE NEW ENTRY
module.exports.createNewEntry = (req, res) => {
    RunEntry.create(req.body)
        .then((newEntry) => res.json({runEntry: newEntry}))
        .catch((err) => res.status(400).json({message: "Something went wrong creating the new barrel race log", error:err}));
}

//GET ALL ENTRIES
module.exports.findAllEntries = (req, res) => {
    RunEntry.find({})
        .then(allEntries => {
            res.json(allEntries);
        })
        .catch(err => res.status(500).json({message: "Something went wrong finding all entries", error:err}))
}

//GET ONE ENTRY BY ID
module.exports.findOneEntry = (req, res) => {
    RunEntry.findOne({_id : req.params.id})
        .then((oneEntry) => {
            console.log(oneEntry);
            res.json(oneEntry);
        })
        .catch( err => res.status(400).json({message: "Something went wrong finding this entry", error: err}));
}

//UPDATE ENTRY
module.exports.updateEntry = (req, res) => {
    RunEntry.findOneAndUpdate({_id : req.params.id}, req.body,
        {new: true, runValidators: true}
        )
        .then((updatedEntry) => {
            res.json(updatedEntry);
        })
        .catch(err => res.status(400).json({message:"Something went wrong updating the entry information", error:err}));
}


//DELETE ENTRY
module.exports.deleteEntry = (req, res) => {
    RunEntry.deleteOne({_id : req.params.id})
        .then((deletedEntry) => {
            res.json(deletedEntry);
        })
        .catch(err => res.status(400).json({message: "Something went wrong deleting this entry", error:err}));
}