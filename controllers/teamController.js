const express = require("express");
const { getTeamById, getAllTeams, createTeam } = require("../queries/team");
const { updateTeamDetails } = require("../queries/match");

const team = express.Router();

team.get("/", async (req, res) => {
  try {
    const teams = await getAllTeams();
    res.status(200).json(teams);
  } catch (error) {
    return `Error retrieving all teams: ${error}`;
  }
});

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

team.post("/", async (req, res) => {
  try {
    const createdTeam = await createTeam(req.body);
    res.status(200).json(createdTeam);
  } catch (error) {
    return `Error posting new team: ${error}`;
  }
});

module.exports = team;
