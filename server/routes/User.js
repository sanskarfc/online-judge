const express = require('express');
var bodyParser = require('body-parser');
const app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());

const UserControllers = require('../controllers/User')
const router = express.Router();




router.get('/', UserControllers.findAll);
router.get('/:id', UserControllers.findOne);
router.post('/', UserControllers.create);
router.delete('/:id', UserControllers.destroy);

console.log("router works i think");

module.exports = router
