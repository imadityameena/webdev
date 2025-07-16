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


app.listen(port, () => {

  console.log(`Example App listening on port ${port}`);
  
})