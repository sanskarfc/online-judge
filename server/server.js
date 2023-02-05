// getting packages and configs
const express = require('express');
const cors = require('cors');
const execSh = require('exec-sh');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); 

const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose'); 

const UserRoute = require('./routes/User')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));   

// router for api
app.use('/user', UserRoute); 

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("database connected successfully!!");
}).catch(err => {
    console.log("could not connect to the database!!", err);
});
 

// running code in terminal 
app.post('/run-code', (req, res) => {
  const { code } = req.body;
    execSh(`echo "${code}" > code.cpp && g++-12 code.cpp -o code.out && ./code.out > output.txt`, function (err, stdout, stderr) {
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
