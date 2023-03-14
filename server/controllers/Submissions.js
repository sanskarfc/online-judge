const SubmissionsModel = require('../models/Submissions')

const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json()); 


exports.findAll = async (req, res) => {
    try {
        const submission  = await SubmissionsModel.find();
        res.status(200).json(submission);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}; 

exports.create = async (req, res) => {
    const submission = req.body;
    const newSubmission = new SubmissionsModel(
        {
            submission_id : submission.submission_id,
            submission_code : submission.submission_code,
            submission_score : submission.submission_score,
        }
    );

    // check this part 
    try {
        await newSubmission.save();
        res.status(201).json(newSubmission);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}