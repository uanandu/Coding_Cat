const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const templates = require("./data/templates.json");

// Here we import the data to the collections
const batchImport = async () => {

    try {

        const client = new MongoClient(MONGO_URI, options); // Connect to the database using the URI and options

        await client.connect(); // connect to the client

        const db = client.db("coding_cat"); // declare the database

        const result = await db.collection("test").insertMany(companies); // insert the companies into the database as a new collection

        client.close();

    } catch (error) {
        console.log(error.stack, "error");
    }
}

batchImport(); // call the function to import the data