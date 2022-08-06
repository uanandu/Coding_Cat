const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const he = require("he");

// GET - /api/templates
const getTemplates = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("coding_cat");
  const templates = await db.collection("test").find().toArray();
  templates
    ? res.status(200).json({
        status: 200,
        data: templates,
        message: "getTemplates success!",
      })
    : res.status(404).json({ status: 404, message: "getTemplates fail!" });

  client.close();
};

// GET - /api/templates/:templateId
const getTemplateById = async (req, res) => {
  const templateId = parseInt(req.params.templateId);

  console.log("templateId", templateId);

  const query = { _id: templateId };
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("coding_cat");

  const template = await db.collection("test").findOne(query);

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

module.exports = {
  getTemplates,
  getTemplateById,
};
