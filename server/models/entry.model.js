const mongoose = require ('mongoose');

//LOCATION = ARENA, DATE, TIME, WINNING TIME, NUMBER OF ENTRIES, PLACING, MONEY WON, RUN NOTES
const EntrySchema = new mongoose.Schema({
    // this is my connection to the horse database
    horseId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Horse',
        // required: [true, "Your horse's name is required"],
    },
    arena: {
        type: String,
        required: [true, "The arena name is required"],
        minLength: [2, "The arena name needs to be at least 2 characters"]
    },
    eventDate: {
        type: Date,
        required: [true, "The event date is required"],
    },
    yourTime: {
        type: Number,
        required: [true, "Your time is required"],
    },
    //NONE OF THE FOLLOWING ARE REQUIRED AS YOU MAY NOT HAVE THE INFORMATION WHEN YOU FIRST START YOUR ENTRY

    winningTime: {
        type: Number,
    },
    placing: {
        type: String
    },
    numberOfEntries: {
        type: Number
    },
    moneyWon: {
        type: Number
    },
    runNotes: {
        type: String
    },

}, {timestamps:true}
)

const RunEntry = mongoose.model("RunEntry", EntrySchema);
module.exports = RunEntry;