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

app.get('/hero/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const { data } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}`);
    res.status(200).send(data);

  } catch (error) {

    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please contact the website administrator'
    });
  }
});

app.get('/search/:name', async (req, res) => {
  try {

    const { name } = req.params;
    const { data: { results } } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/search/${name}`);
    res.status(200).send(results);

  } catch (error) {

    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Please contact the website administrator'
    });
  }
});