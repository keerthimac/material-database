const asyncHandler = require("express-async-handler");
const db = require("../models");

const PipeInfo = db.plumPipeInfo;

// @desc Get Materials
// @route GET /api/materials
// @access Private
const getPlumPipeInfo = asyncHandler(async (req, res) => {
  //   const { id } = req.user;

  //   if (!req.user) {
  //     res.status(400);
  //     throw new Error("user not found");
  //   }

  const pipeInfo = await PipeInfo.findAll({
    // attributes: ["id", "material"],
  });
  res.status(200).json(pipeInfo);
});

module.exports = {
  getPlumPipeInfo,
};
