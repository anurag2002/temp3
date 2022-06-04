const fs = require('fs');
const http = require('http')
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const userCredentialModel = require('./models/userInfo');
const DB = "mongodb+srv://anurag2002:9810541660@minorprojectg9.cxzyv.mongodb.net/?retryWrites=true&w=majority";

// app.use(require('./routes/userRoutes'))

mongoose.connect(DB, {
    useNewUrlParser: true,
    userCreateIndex: true,
    userUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection Successful1")
}).catch((err) => console.log("No Connection"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));


app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/registration_page', (req, res) => {
    res.render('registration_page')
});

// app.post('/registeration_page', (req, res) => {
//     const newUser = new userCredentialModel({
//         Name: req.body.fName,
//         Email_ID: req.body.emailID,
//         Username: req.body.username,
//         Password: req.body.pass
//     }).insert(Name, Email_ID, Username, Password)
//     newUser.save((err, data) => {
//         if (err) throw err;
//     });
// });

app.get('/home', (req, res) => {
    res.render('first_page')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})