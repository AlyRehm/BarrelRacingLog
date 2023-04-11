const mongoose = require('mongoose');

const HorseSchema = new mongoose.Schema({
    horseName: {
        type: String,
        required: [true, "The horse's name is required"],
        minLength: [2, "The horse's name needs to be at least 2 characters"]
    },
    // hoping to be able to include images - this will be an extra feature
    // imageUrl: {
    //     type: String,
    // }
}, {timestamps:true});

const Horse = mongoose.model("Horse", HorseSchema);
module.exports = Horse;