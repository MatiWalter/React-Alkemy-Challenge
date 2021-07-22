const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();

const { ACCESS_TOKEN } = process.env;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend online');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});