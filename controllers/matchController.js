const express = require("express");
const {
  getAllMatches,
  getSpecificMatch,
  getTeamsFromSpecificMatch,
  updateTeamDetails,
  createMatch,
  deleteMatch,
} = require("../queries/match");
const { createTeam } = require("../queries/team");

const match = express.Router();

match.get("/", async (req, res) => {
  try {
    const matches = await getAllMatches();
    res.json(matches);
  } catch (error) {
    return "Error retrieving matches" + error;
  }
});

match.get("/:id/teams", async (req, res) => {
  const { id } = req.params;
  try {
    const teams = await getTeamsFromSpecificMatch(id);
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({
      error: `Could not get teams for specified match: ${error.message}`,
    });
  }
});

match.put("/:id/teams", async (req, res) => {
  const { id } = req.params;
  const updatedDetails = req.body;
  try {
    const updatedTeam = await updateTeamDetails(id, updatedDetails);
    res.json(updatedTeam);
  } catch (error) {}
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

match.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteMatch(id);
    console.log(id);
    res.status(200).json({ message: "Successfully Deleted Match" });
  } catch (error) {
    return `${error}: Route error deleting match`;
  }
});

match.post("/", async (req, res) => {
  try {
    const homeTeam = await createTeam(req.body.homeTeam);
    const awayTeam = await createTeam(req.body.awayTeam);

    console.log(homeTeam.id, awayTeam.id);

    const newMatch = await createMatch(req.body.match, awayTeam, homeTeam);

    res.json(newMatch);
  } catch (error) {
    return `Error creating match: ${error}`;
  }
});

module.exports = match;
