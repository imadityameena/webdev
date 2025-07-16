require('dotenv').config()
const express = require('express');
const { log } = require('three/tsl');

const app = express();

const port = 4000;


app.get('/', (req, res) => {

  res.send("Hello world!")

})


app.get('/twitter', (req, res) => {

  res.send("huppyyy.twitter")

})


app.get('/login', (req, res) => {
  res.send("<h1>Please login at Chai and Code<h1>")

})

app.get('/youtube', (req, res) => {
  res.send("<h2>Welcome to Youtube! <h2>")

})


app.listen(process.env.PORT, () => {

  console.log(`Example App listening on port ${port}`);
  
})