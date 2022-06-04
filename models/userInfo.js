const mongoose = require('mongoose');

// connecting the database using the mongoose package // mongodb Atlas is used 
// const DB = "mongodb+srv://anurag2002:9810541660@minorprojectg9.cxzyv.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     userCreateIndex: true,
//     userUnifiedTopology: true,
//     useFindAndModify: false
// })

// defining the structure of the collection and fields to be entered
const userCredential = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please add a name"],
    },
    Email_ID: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
    },
    Password: {
        type: String,
        required: [true, "Please add a password"],
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('userCredentials', userCredential);