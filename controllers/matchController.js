const express = require("express");
const { getAllMatches } = require("../queries/match");

const match = express.Router();

match.get("/", async (req, res) => {
  try {
    const matches = await getAllMatches();
    res.json(matches);
  } catch (error) {
    return "Error retrieving matches" + error;
  }
});

module.exports = match;
