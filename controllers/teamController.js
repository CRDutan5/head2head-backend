const express = require("express");
const { getTeamById } = require("../queries/team");

const team = express.Router();

team.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const team = await getTeamById(id);
    res.json(team);
  } catch (error) {
    return error;
  }
});

module.exports = team;
