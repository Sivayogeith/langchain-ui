const express = require('express');
const path = require('path');
const axios = require("axios")

const app = express();
const port = 8080;
app.use(express.json())
app.use(express.static(__dirname + '/'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/question', (req, res) => {
  // TODO: call langchain api
  return res.status(200).json({output: "Attention is all you need!", input: req.body.question})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})