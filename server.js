const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const PotfolioRoute = require("./Routes/PotfolioRoute.js");
const bodyParser = require("body-parser");

// configure
dotenv.config();

const app = express();

// middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/potfolio", PotfolioRoute);

const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
});

