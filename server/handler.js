const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getTemplates = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    
    await client.connect();
    const db = client.db("coding_cat");
    const templates = await db.collection("test").find().toArray();
    templates
        ? res
            .status(200)
            .json({ status: 200, data: templates, message: "getTemplates success!" })
        : res.status(404).json({ status: 404, message: "getTemplates fail!" });
    
    client.close();
    }

module.exports = {
    getTemplates
}