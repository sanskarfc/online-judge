const CommentModel = require('../models/Comment')

const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());  

exports.create = async(req, res) => { 
    console.log("inside comment create post request");
    if(!req.body.comment_id && !req.body.comment_content){
        res.status(400).send({message: "content of the comment should not be empty"});
    } 

    const comment = new CommentModel({
        comment_id: req.body.comment_id,
        comment_content: req.body.comment_content,
        comment_author: req.body.comment_author,
        parent_post_id: req.body.parent_post_id
    });

    await comment.save().then(data => {
        res.send({
            message: "comment created successfully",
            comment: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occurred while creating the comment" 
        });
    });
}; 

exports.findAll = async (req, res) => {
    try {
        const comment = await CommentModel.find();
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}; 
