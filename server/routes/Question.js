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

router.post('/question/:id/comment', async (req, res) => {
    // find out which post we are commenting on 
    const id = req.params.id; // id 

    // get the comment text and record post id 
    const comment = new Comment({
        text: req.body.comment,
        question: id
    }) 
 
    // save comment 
    await comment.save(); 

    // get this particular post  
    const thisPost = await QuestionControllers.findById(id); 

    // push the comment into the post.comments array 
    thisPost.comments.push(comment);

    // save and redirect
    await thisPost.save(function(err) {
        if(err) {console.log(err);}
    })
})


module.exports = router
