const express = require("express");
const morgan = require("morgan");

const PORT = 8000; // port to run the server on

const app = express();

app
    .get("/", (req, res) => res.status(200).json("Hello World! 🥓"))
    .listen(PORT, () => console.info(`Listening on port ${PORT}`));
