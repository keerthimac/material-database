const express = require("express");
const router = express.Router();

const { getMaterials } = require("../controllers/materialController");

router.get("/", getMaterials);

module.exports = router;
