const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('../db/index.js');
const app = express();
var PORT = 3333

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
