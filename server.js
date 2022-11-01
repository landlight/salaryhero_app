const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

require("dotenv").config();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

// call sysc()
const db = require("./src/app/models");

db.sequelize.sync();

// Setup server port
const port = process.env.NODE_DOCKER_PORT || 8080;

// Send message for default URL

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
);


app.get("/", (req, res) => res.status(200).send("Salary Hero APIs are here"));

// Use Api routes in the App
const routes = require("./src/app/routes");
app.use(routes);


// Launch app to listen to specified port
const server = app.listen(port, function() {
  console.log("Running Salary Hero API on port " + port);
});

module.exports = server;
