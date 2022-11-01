const express = require('express');
const bodyParser = require('body-parser');

let app = express();

require('dotenv').config()

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Setup server port
const port = process.env.NODE_DOCKER_PORT || 8080;

const basePath = '/apis';

// Send message for default URL
app.get('/', (req, res) => res.status(200).send('Salary Hero APIs are here'));

// Launch app to listen to specified port
let server = app.listen(port, function () {
  console.log("Running Salary Hero API on port " + port);
});

module.exports = server;