const QuestionModel = require('../models/Question')

const express = require('express');
var bodyParser = require('body-parser');
const Question = require('../models/Question');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json()); 

// create a question
exports.create = async(req, res) => {
    console.log("inside question create POST req")
    if(!req.body.question_id && !req.body.question_content){
        res.status(400).send({message: "content of the question should not be empty"});
    }

    const question = new QuestionModel({
        question_id: req.body.question_id,
        question_content: req.body.question_content,
        question_author: req.body.question_author
    });

    await question.save().then(data => {
        res.send({
            message: "question created successfully!!",
            question:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while creating the question"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const question  = await QuestionModel.find();
        res.status(200).json(question);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};  


// find a single question with an id 
exports.findOne = async (req, res) => {
    try {
        const question = await QuestionModel.findById(req.params.id);
        res.status(200).json(question);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// delete a question with the specified id in the request
exports.destroy = async (req, res) => {
    await QuestionModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data){
            res.status(404).send({
                message: "question not found"
            });
        } else {
            res.send({
                message: "question deleted successfully !!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
