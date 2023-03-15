const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());

const SubmissionsControllers = require('../controllers/Submissions')
const router = express.Router();

router.get('/', SubmissionsControllers.findAll);
router.post('/', SubmissionsControllers.create); 


module.exports = router 
