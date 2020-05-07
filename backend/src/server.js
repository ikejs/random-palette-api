require('dotenv').config({ path: '../.env' })
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const randomController = require('./controllers/random');

app.get('/random', randomController.getRandomHSL);
app.get('/random/:HEX', randomController.getRandomHSLfromHEX);

console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});

module.exports = app