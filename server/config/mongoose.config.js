
const mongoose = require('mongoose');

const dbName = "barrel_racing_log";

mongoose.connect(`mongodb://127.0.0.1:27017/barrel_racing_log`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to ${dbName} database`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

