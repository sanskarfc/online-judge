const express = require('express');
const cors = require('cors');
const execSh = require('exec-sh');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.post('/run-code', (req, res) => {
  const { code } = req.body;
  execSh(`echo "${code}" > code.cpp && g++ code.cpp -o code.out && ./code.out`, function (err, stdout, stderr) {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.send({ output: stdout });
    }
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

