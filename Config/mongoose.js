const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
	console.log("Connected to Database");
});

module.exports = db;
