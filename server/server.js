// getting packages and configs
const express = require('express');
const cors = require('cors');
const execSh = require('exec-sh');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); 
const path = require('path');

const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose'); 

const UserRoute = require('./routes/User')
const QuestionRoute = require('./routes/Question')
const SubmissionsRoute = require('./routes/Submissions')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));   

// router for api
app.use('/user', UserRoute); 
app.use('/question', QuestionRoute);
app.use('/submissions', SubmissionsRoute);

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("database connected successfully!!");
}).catch(err => {
    console.log("could not connect to the database!!", err);
});

app.use(express.static(path.join(__dirname, 'codes')));
app.use(express.static(path.join(__dirname, 'scores')));
 

// running code in terminal 
app.post('/run-code', (req, res) => {
  const { code } = req.body;
    execSh(`echo "${code}" > code.cpp && g++ code.cpp -o code.out && ./code.out > output.txt`, function (err, stdout, stderr) {
        if (err) {
            console.log(err); 
            // return an error response if there was an error executing the code 
            return res.status(500).json({ err });
        } else {
            let outputData = fs.readFileSync("output.txt", "utf-8");
            return res.json({ output:stdout, outputData });
        }
    });
}); 

// send request to submissions page 


// displaying the output 
app.get('/output', (req, res) => {
  fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});


// app.listen :]
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
 
// to do:
// choosing languages should work (need to write different api routes) 
