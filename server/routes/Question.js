const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());

const QuestionControllers = require('../controllers/Question')
const router = express.Router();

router.get('/', QuestionControllers.findAll);
router.get('/:id', QuestionControllers.findOne);
router.post('/', QuestionControllers.create);
router.delete('/:id', QuestionControllers.destroy);

module.exports = router
