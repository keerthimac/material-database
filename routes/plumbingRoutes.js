const express = require("express");
const router = express.Router();

const { getPlumPipeInfo } = require("../controllers/plumbingController");

router.get("/", getPlumPipeInfo);

module.exports = router;
