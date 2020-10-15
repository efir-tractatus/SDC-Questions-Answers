const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('../db/index.js');
const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
