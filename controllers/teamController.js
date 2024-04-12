const express = require("express");
const { getTeamById } = require("../queries/team");
const { updateTeamDetails } = require("../queries/match");

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

team.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTeam = await updateTeamDetails(id, req.body);
    res.status(200).json(updatedTeam);
  } catch (error) {
    return error;
  }
});

module.exports = team;
