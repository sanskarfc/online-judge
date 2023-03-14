const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_id: {
        type: String,
        required: true
    },
    question_content: {
        type: String,
        required: true
    },
    question_author: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const Question = mongoose.model('Question', questionSchema);
module.exports = mongoose.model('Question', questionSchema);
