const mongoose = require ('mongoose');

//LOCATION = ARENA, DATE, TIME, WINNING TIME, NUMBER OF ENTRIES, PLACING, MONEY WON, RUN NOTES
const EntrySchema = new mongoose.Schema({
    horseName: {
        type: String,
        required: [true, "Horse's name is required"],
        minLength: [2, "The horse's name needs to be at least 2 characters"]
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
    }
}, {timestamps:true}
)

const RunEntry = mongoose.model("RunEntry", EntrySchema);
module.exports = RunEntry;