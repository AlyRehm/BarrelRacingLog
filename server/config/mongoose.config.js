
const mongoose = require('mongoose');

const dbName = "barrel_racing_log";

mongoose.connect(`mongodb://127.0.0.1:27017/barrel_racing_log`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to ${dbName} database`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

    //WHEN CREATING A NEW LOG ENTRY, THE PERSON WILL NEED TO SELECT THEIR HORSE FROM THE DROP DOWN MENU. THAT WAY YOU CAN ITERATE THROUGH THE LISTS AND ONLY PULL THE TIMES FOR THAT SPECIFIC HORSE 