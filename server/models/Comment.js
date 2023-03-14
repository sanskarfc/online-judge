const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());
const mongoose = require('mongoose'); 

const commentSchema = new mongoose.Schema({
    comment_id: {
        type: String,
        required: true,
        unique: true
    }, 
    comment_content: {
        type: String,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
}); 

const Comment = mongoose.model('Comment', commentSchema);
module.exports = mongoose.model('Comment', commentSchema);
