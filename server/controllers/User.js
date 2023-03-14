const UserModel = require('../models/User')

const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());

// create and save a new user
exports.create = async(req, res) => { 
    if(!req.body.user_id && !req.body.user_name){ // cannot create the entity because name or user_id is empty
        res.status(400).send({messaage: "user_name and user_id cannot be empty"});
    }

    const user = new UserModel({  // creating model 
        user_id: req.body.user_id, 
        user_name: req.body.user_name 
    });

    await user.save().then(data => {
        res.send({
            message: "user created successfully!!",
            user: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occurred while creating user"
        });
    });
}; 

// retrieve all users from the database
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

// find a single user with an id 
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data){
            res.status(404).send({
                message: "user not found"
            });
        } else {
            res.send({
                message: "user deleted successfully !!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
