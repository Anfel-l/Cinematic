// Dependencies
const express = require('express');
const cors = require('cors')

// Local dependencies/modules
const db = require('./db/database')
const reservations = require('./routes/reservations')

// Instances & variables
const app = express();
const port = process.env.PORT || 5240;

// Db try connection
(async () => {
    try{
        await db.authenticate();
        await db.sync();
        console.log("Connection done!");
    }catch (error){
        throw new Error(error)
    }
})();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/reservations', reservations);

app.listen(port, () => {
    console.log(`New Connection! ${port}`);
});
