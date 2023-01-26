const express = require('express');
const cors = require('cors');
const execSh = require('exec-sh');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

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

app.get('/output', (req, res) => {
  fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
 

// to do:
// display the output from the compiled code in a window (GET request from the react frontend)
// choosing languages should work (need to write different api routes) 
