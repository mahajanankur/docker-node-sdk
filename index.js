const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const containerController = require("./src/controllers/containers");

//Custom properties
const port = 8080;
const profile = "dev";

//Configure the server
const server = express();

//Configure the rest api logger

server.use(morgan(profile));

//Configure the JSON body parser for request.
server.use(bodyParser.json());

//Server port configuration.
server.listen(port, () => {
    console.log(`App service node server is running on port: ${port}`);
});

//Register the controllers as routers.
server.use("/api/containers", controller);