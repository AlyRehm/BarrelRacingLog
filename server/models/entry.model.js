const mongoose = require ('mongoose');

//LOCATION = ARENA, DATE, TIME, WINNING TIME, NUMBER OF ENTRIES, PLACING, MONEY WON, RUN NOTES
const EntrySchema = new mongoose.Schema({
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
        // TRYING THIS TYPE INSTEAD OF NUMBER TO GET A FLOAT(DECIMAL)
        type: mongoose.Types.Decimal128,
        required: [true, "Your time is required"],
    },
    //NONE OF THE FOLLOWING ARE REQUIRED AS YOU MAY NOT HAVE THE INFORMATION WHEN YOU FIRST START YOUR ENTRY

    winningTime: {
        // TRYING THIS TYPE INSTEAD OF NUMBER TO GET A FLOAT(DECIMAL)
        type: mongoose.Types.Decimal128
    },
    placing: {
        type: Number
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
    // this is my connection to the horse database
    horse: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Horse'
    }
}, {timestamps:true}
)

const RunEntry = mongoose.model("RunEntry", EntrySchema);
module.exports = RunEntry;