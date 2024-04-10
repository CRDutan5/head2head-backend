const express = require("express");
const { getAllMatches, getSpecificMatch } = require("../queries/match");

const match = express.Router();

match.get("/", async (req, res) => {
  try {
    const matches = await getAllMatches();
    res.json(matches);
  } catch (error) {
    return "Error retrieving matches" + error;
  }
});

match.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const match = await getSpecificMatch(id);
    res.status(200).json(match);
  } catch (error) {
    return `Could not get specific match: ${error}`;
  }
});

module.exports = match;
