const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());
const mongoose = require('mongoose');

const submissionsSchema = new mongoose.Schema({
    submission_id: {
        type: String,
        required: true
    },
    submission_code: {
        type: String,
        required: true
    },
    submission_score: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Submissions', submissionsSchema); 