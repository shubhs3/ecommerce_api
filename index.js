const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();

const db = require("./Config/mongoose");
const port = process.env.PORT || 6010;


app.use(cors());

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use express router
app.use("/", require("./Routes"));

app.listen(port, () => {
	console.log("Running on port 3000");
});
