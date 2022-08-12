const asyncHandler = require("express-async-handler");
const db = require("../models");

const Material = db.material;

// @desc Get Materials
// @route GET /api/materials
// @access Private
const getMaterials = asyncHandler(async (req, res) => {
  //   const { id } = req.user;

  //   if (!req.user) {
  //     res.status(400);
  //     throw new Error("user not found");
  //   }

  const material = await Material.findAll({
    // attributes: ["id", "material"],
  });
  res.status(200).json(material);
});

module.exports = {
  getMaterials,
};
