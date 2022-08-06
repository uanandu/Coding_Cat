const express = require("express");
const morgan = require("morgan");

const PORT = 8000; // port to run the server on

const {getTemplates} = require("./handler");

const app = express();

app
    .get("/", (req, res) => res.status(200).json("Hello World! 🥓"))
    .get("/api/templates", getTemplates)
    .listen(PORT, () => console.info(`Listening on port ${PORT}`));
