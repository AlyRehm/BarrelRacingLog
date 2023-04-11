// CRUD METHODS FOR HORSE 

const Horse = require("../models/horse.model");

// CREATE NEW HORSE 
module.exports.createNewHorse = (req, res) => {
    Horse.create(req.body)
        .then((newHorse) => res.json({horse: newHorse}))
        .catch((err) => res.status(400).json({message: "Something went wrong creating a new horse", error:err}))
}

//GET ALL HORSES
module.exports.findAllHorses = (req, res) => {
    Horse.find({})
        .then(allHorses => {
            res.json(allHorses);
        })
        .catch(err => res.status(500).json({message: "Something went wrong finding all horses", error:err}))
}

//GET ONE HORSE BY ID
module.exports.findOneHorse = (req, res) => {
    Horse.findOne({_id : req.params.id})
        .then((oneHorse) => {
            console.log(oneHorse);
            res.json(oneHorse);
        })
        .catch( err => res.status(400).json({message: "Something went wrong finding this horse", error: err}));
}

//UPDATE HORSE
module.exports.updateHorse = (req, res) => {
    Horse.findOneAndUpdate({_id : req.params.id}, req.body,
        {new: true, runValidators: true}
        )
        .then((updatedHorse) => {
            res.json(updatedHorse);
        })
        .catch(err => res.status(400).json({message:"Something went wrong updating the horse information", error:err}));
}

//DELETE HORSE
module.exports.deleteHorse = (req, res) => {
    Horse.deleteOne({_id : req.params.id})
        .then((deletedHorse) => {
            res.json(deletedHorse);
        })
        .catch(err => res.status(400).json({message: "Something went wrong deleting this horse", error:err}));
}

