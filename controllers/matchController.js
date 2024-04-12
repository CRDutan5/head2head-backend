const express = require("express");
const {
  getAllMatches,
  getSpecificMatch,
  getTeamsFromSpecificMatch,
  updateTeamDetails,
} = require("../queries/match");

const match = express.Router();

match.get("/", async (req, res) => {
  try {
    const matches = await getAllMatches();
    res.json(matches);
  } catch (error) {
    return "Error retrieving matches" + error;
  }
});

// match.get("/:id/teams", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const teams = await getTeamsFromSpecificMatch(id);
//     res.json(teams);
//   } catch (error) {
//     return `Could not get teams for specified match: ${error}`;
//   }
// });

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

module.exports = match;
