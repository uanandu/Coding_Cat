const express = require("express");
const morgan = require("morgan");


const PORT = 8000; // port to run the server on

const {getTemplates, getTemplateById, createDraft, userRegistration, getMemberById, updateProfile} = require("./handler");

const app = express();

app
    .use(express.json())
    .use(morgan("tiny"))
    .get("/", (req, res) => res.status(200).json("Hello World! 🥓"))
    .get("/api/members/templates", getTemplates)
    .get("/api/members/templates/:templateType", getTemplateById)
    .get("/api/members/:memberId", getMemberById)
    // register a new user
    .post("/api/member", userRegistration)
    // login a user
    .post("/api/members/:memberId/drafts", createDraft)
    // update a user profile
    .patch("/api/members/:emailId", updateProfile)
    .listen(PORT, () => console.info(`Listening on port ${PORT}`));
