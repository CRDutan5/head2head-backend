const db = require("../db/dbConfig");

const getAllTeams = async () => {
  try {
    const query = await db.any("SELECT * FROM team");
    return query;
  } catch (error) {
    return `Error retrieving all teams: ${error}`;
  }
};

const getTeamById = async (id) => {
  try {
    const team = await db.one("SELECT * FROM team WHERE id=$1", id);
    return team;
  } catch (error) {
    return `${error}: Cannot get team`;
  }
};

const createTeam = async (team) => {
  try {
    const createdTeam = await db.one(
      "INSERT INTO team (name, home_color, away_color, creator_id, goalie, defender_one, defender_two, midfielder_one, midfielder_two, forward) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10) RETURNING *",
      [
        team.name,
        team.home_color,
        team.away_color,
        team.creator_id,
        team.goalie,
        team.defender_one,
        team.defender_two,
        team.midfielder_one,
        team.midfielder_two,
        team.forward,
      ]
    );
    return createdTeam;
  } catch (error) {
    return `Could not create team: ${error}`;
  }
};

module.exports = { getAllTeams, getTeamById, createTeam };
