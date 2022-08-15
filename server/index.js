const express = require("express"); // Express web server framework
const morgan = require("morgan"); // HTTP request logger middleware for node.js


const PORT = 8000; // port to run the server on

const {getTemplates, getTemplateById, createDraft, userRegistration, getMemberById, updateProfile, getDrafts, getDraftById, deleteDraft, getDraftsByUser} = require("./handler"); // import the handler functions from handler.js

const app = express();

app
    .use(express.json())
    .use(morgan("tiny"))
    .get("/", (req, res) => res.status(200).json("Hello World! 🥓")) // generic route
    // get all templates
    .get("/api/members/templates", getTemplates)
    // get template by id
    .get("/api/members/templates/:templateType", getTemplateById)
    // get members using emailId
    .get("/api/members/:memberId", getMemberById)
    // register a new user
    .post("/api/member", userRegistration)
    // create a new draft/saved template
    .post("/api/members/drafts", createDraft)
    // get all the drafts
    .get("/api/alldrafts", getDrafts)
    // get all the drafts by id
    .get("/api/members/drafts/:draftId", getDraftById)
    // get all the drafts by user
    .get("/api/drafts/:emailId", getDraftsByUser)
    // delete a draft
    .delete("/api/members/drafts/:draftId", deleteDraft)   
    // update a user profile
    .patch("/api/members/:emailId", updateProfile)
    .listen(PORT, () => console.info(`Listening on port ${PORT}`));

