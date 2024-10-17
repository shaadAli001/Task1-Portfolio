const express = require("express");

const sendEmailController = require("../Controllers/PotfolioControllers");

const router = express.Router();

router.post("/sendMail", sendEmailController)

module.exports = { router };