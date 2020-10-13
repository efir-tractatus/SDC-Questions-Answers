const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const port = 3333;

app.use(bodyParser.json());





app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });