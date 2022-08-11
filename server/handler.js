// connect to mongodb
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const bcrypt = require("bcrypt"); // for hashing passwords

const { v4: uuidv4 } = require("uuid"); // for generating unique ids

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const he = require("he"); // for encoding html

// GET - /api/templates
const getTemplates = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("coding_cat");

  try {
    const templates = await db.collection("templates").find({}).toArray();
    res.status(200).json({
      status: 200,
      data: templates,
      message: "Templates found!",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Templates query failed!" });
  }

  client.close();
};

// GET - /api/templates/:templateId
const getTemplateById = async (req, res) => {
  const templateType = req.params.templateType;

  console.log("templateType", templateType);

  const query = { type: templateType };
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("coding_cat");

  const template = await db.collection("templates").findOne(query);

  const htmlDocument = template.html.split("\n");
  const cssDocument = template.css.split("\n");
  const jsDocument = template.js.split("\n");

  if (template) {
    try {
      res.status(200).json({
        status: 200,
        html: htmlDocument,
        css: cssDocument,
        js: jsDocument,
        message: "Template found!",
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Template query failed!" });
    }
  } else {
    res.status(404).json({ status: 404, message: "template not found!!" });
  }

  client.close();
};

// POST -api/registration
const userRegistration = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("coding_cat");
  const members = await db.collection("members");

  console.log("the body", req.body);

  const user = {
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    age: parseInt(req.body.age),
    occupation: req.body.occupation,
    memberbio: req.body.memberbio,
    avatar: req.body.avatar,
  };

  console.log("user", user);

  if (!user.username || !user.fullname || !user.email) {
    res.status(400).json({
      status: 400,
      message: "Please fill in all fields!",
    });
  } else if (await members.findOne({ email: user.email })) {
    res.status(400).json({
      status: 400,
      message: "User already exists!",
    });
  } else {
    try {
      const newMember = await members.insertOne({
        _id: uuidv4(),
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        occupation: user.occupation,
        age: user.age,
        memberbio: user.memberbio,
        avatar: user.avatar,
        agreed: true,
      });

      console.log("newMember", newMember);

      res.status(201).json({
        status: 201,
        data: newMember,
        message: "Member profile created!",
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Member creation failed!" });
    }
  }

  client.close();
};

// PATCH - /api/profile/:memberId
const updateProfile = async (req, res) => {
  const { username, fullname, email, age, occupation, memberbio } = req.body;
  const memberEmail = req.params.emailId;
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("coding_cat");

  const members = await db.collection("members");

  await client.connect();

  const memberCheck = await members.findOne({ email: memberEmail });

  if (memberCheck) {
    try {
      const updatedMember = await db.collection("members").findOneAndUpdate(
        { email: memberEmail },
        {
          $set: {
            username: username,
            fullname: fullname,
            email: email,
            age: age,
            occupation: occupation,
            memberbio: memberbio,
          },
        },
        { returnOriginal: false }
      );

      res.status(200).json({
        status: 200,
        data: updatedMember,
        message: "Member profile updated!",
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Member update failed!" });
    }
  } else {
    res.status(404).json({ status: 404, message: "Member not found!" });
  }

  client.close();
};

// GET - /api/members/:memberId
const getMemberById = async (req, res) => {
  const memberEmail = req.params.memberId;

  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("coding_cat");

  const findMember = await db
    .collection("members")
    .findOne({ email: memberEmail });

  if (findMember) {
    try {
      const member = await db
        .collection("members")
        .findOne({ email: memberEmail });
      res.status(200).json({
        status: 200,
        data: member,
        message: "Member found!",
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Member query failed!" });
    }
  } else {
    res.status(404).json({ status: 404, message: "Member not found!" });
  }

  client.close();
};

// POST - /api/drafts
const createDraft = async (req, res) => {
  const { html, css, js, email, user } = req.body;
  console.log("the body", req.body);
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("coding_cat");

  const members = await db.collection("members");

  await client.connect();

  // assign random number to draft
  const randomNumber = Math.floor(Math.random() * 20);

    try {
      const newDraft = await db.collection("drafts").insertOne({
        _id: randomNumber,
        email: email,
        html: html,
        css: css,
        js: js,
        user: user,
      });

      res.status(201).json({
        status: 201,
        data: newDraft,
        message: "Draft created!",
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Template query failed!" });
    }

  client.close();
};

// GET - /api/drafts
const getDrafts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  const db = client.db("coding_cat");

  await client.connect();

  try {
    const drafts = await db.collection("drafts").find({}).toArray();

    res.status(200).json({
      status: 200,
      data: drafts,
      message: "Drafts found!",
    });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Draft query failed!" });
  }

  client.close();
};

// GET - /api/drafts/:draftId
const getDraftById = async (req, res) => {
  const draftId = parseInt(req.params.draftId);

  const client = new MongoClient(MONGO_URI, options);

  const db = client.db("coding_cat");

  await client.connect();

    try {
      const draft = await db.collection("drafts").findOne({ _id: draftId });

      console.log("draft", draft);

      res.status(200).json({
        status: 200,
        data: draft,
        message: "Draft found!",
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Draft query failed!" });
    }
  client.close();
};

// DELETE - /api/drafts/:draftId
const deleteDraft = async (req, res) => {
  const draftId = req.params.draftId;

  console.log("draftId in delete", draftId);

  const client = new MongoClient(MONGO_URI, options);

  const db = client.db("coding_cat");
  await client.connect();
    try {
      const deleteIt = await db.collection("drafts").findOneAndDelete({ _id: draftId });

      res.status(200).json({
        status: 200,
        data: deleteIt,
        message: "Draft deleted!",
      });
    } catch (err) {
      res.status(500).json({ status: 500, message: "Draft query failed!" });
    }

  client.close();
};

module.exports = {
  getTemplates,
  getTemplateById,
  createDraft,
  userRegistration,
  getMemberById,
  updateProfile,
  getDrafts,
  getDraftById,
  deleteDraft,
};
