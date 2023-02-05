
const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());

// this should be the url for accessing the database 
module.exports = { 
    url: 'mongodb+srv://sanskarfc:sanskarfc@cluster0.8yb7g3b.mongodb.net/?retryWrites=true&w=majority'
};
