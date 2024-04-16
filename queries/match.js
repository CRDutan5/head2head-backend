const db = require("../db/dbConfig");

const getAllMatches = async () => {
  try {
    const matches = await db.any("SELECT * FROM match");
    return matches;
  } catch (error) {
    return "Error retrieving matches" + error;
  }
};

// Use this when i wanna get a single specific match
const getSpecificMatch = async (id) => {
  try {
    const query = "SELECT * FROM match WHERE id = $1";
    const match = await db.one(query, id);
    return match;
  } catch (error) {
    return `Could nottttt get specific match: ${error}`;
  }
};

const getTeamsFromSpecificMatch = async (id) => {
  try {
    const teams = await db.any(
      `
      SELECT
  match.id AS match_id,
  home_team.id AS home_team_id,
  away_team.id AS away_team_id,
  home_team.name AS home_team_name,
  home_team.home_color AS home_team_color,
  away_team.name AS away_team_name,
  away_team.away_color AS away_team_color,
  home_goalie.first_name AS home_goalie_name,
  home_defender.first_name AS home_defender_one_name,
  home_defender_two.first_name AS home_defender_two_name,
  home_midfielder.first_name AS home_midfielder_one_name,
  home_midfielder_two.first_name AS home_midfielder_two_name,
  home_forward.first_name AS home_forward_name,
  away_goalie.first_name AS away_goalie_name,
  away_defender.first_name AS away_defender_one_name,
  away_defender_two.first_name AS away_defender_two_name,
  away_midfielder.first_name AS away_midfielder_one_name,
  away_midfielder_two.first_name AS away_midfielder_two_name,
  away_forward.first_name AS away_forward_name
FROM
  match
  LEFT JOIN team AS home_team ON match.home_team_id = home_team.id
  LEFT JOIN team AS away_team ON match.away_team_id = away_team.id
  LEFT JOIN users AS home_goalie ON home_team.goalie = home_goalie.id
  LEFT JOIN users AS home_defender ON home_team.defender_one = home_defender.id
  LEFT JOIN users AS home_defender_two ON home_team.defender_two = home_defender_two.id
  LEFT JOIN users AS home_midfielder ON home_team.midfielder_one = home_midfielder.id
  LEFT JOIN users AS home_midfielder_two ON home_team.midfielder_two = home_midfielder_two.id
  LEFT JOIN users AS home_forward ON home_team.forward = home_forward.id
  LEFT JOIN users AS away_goalie ON away_team.goalie = away_goalie.id
  LEFT JOIN users AS away_defender ON away_team.defender_one = away_defender.id
  LEFT JOIN users AS away_defender_two ON away_team.defender_two = away_defender_two.id
  LEFT JOIN users AS away_midfielder ON away_team.midfielder_one = away_midfielder.id
  LEFT JOIN users AS away_midfielder_two ON away_team.midfielder_two = away_midfielder_two.id
  LEFT JOIN users AS away_forward ON away_team.forward = away_forward.id
WHERE
  match.id = $1

    `,
      [id]
    );

    return teams;
  } catch (error) {
    throw new Error(`Error fetching teams for match: ${error}`);
  }
};

const updateTeamDetails = async (id, team) => {
  const {
    name,
    home_color,
    away_color,
    creator_id,
    goalie,
    defender_one,
    defender_two,
    midfielder_one,
    midfielder_two,
    forward,
  } = team;
  try {
    const updatedTeam = await db.one(
      "UPDATE team SET name=$1, home_color=$2, away_color=$3, creator_id=$4, goalie=$5, defender_one=$6, defender_two=$7, midfielder_one=$8, midfielder_two=$9, forward=$10 WHERE id=$11 RETURNING *",
      [
        name,
        home_color,
        away_color,
        creator_id,
        goalie,
        defender_one,
        defender_two,
        midfielder_one,
        midfielder_two,
        forward,
        id,
      ]
    );
    return updatedTeam;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createMatch = async (match, away_team, home_team) => {
  try {
    const query =
      "INSERT INTO match (img,address,state,city,zip,duration, start_datetime, away_team_id, home_team_id, creator_id, player_slots) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *";
    const variables = [
      match.img,
      match.address,
      match.state,
      match.city,
      match.zip,
      match.duration,
      match.start_datetime,
      away_team.id,
      home_team.id,
      match.creator_id,
      match.player_slots,
    ];
    const newMatch = await db.one(query, variables);
    return newMatch;
  } catch (error) {
    return `Error with the query: ${error}`;
  }
};

const deleteMatch = async (id) => {
  try {
    const query = "DELETE FROM match WHERE id=$1 RETURNING *";
    await db.none(query, [id]);
    console.log("ROute", id);
    // return deletedMatch;
  } catch (error) {
    return `${error}: Could Not Delete Match`;
  }
};

const updateMatch = async (id, match) => {
  try {
    const matchQuery =
      "UPDATE match SET img=$1, address=$2, state=$3, city=$4, zip=$5, duration=$6, start_datetime=$7 WHERE id=$8 RETURNING *";
    const matchVariables = [
      match.img,
      match.address,
      match.state,
      match.city,
      match.zip,
      match.duration,
      match.start_datetime,
      id,
    ];
    const updatedMatch = await db.one(matchQuery, matchVariables);
    return updatedMatch;
  } catch (error) {
    return `Error in query function: ${error}`;
  }
};

const updateTeam = async (id, homeTeam, awayTeam) => {
  try {
    const query =
      "UPDATE team SET home_team_name=$1, home_team_color=$2, away_team_name=$3, away_team_color=$4 WHERE id =$5";
    const variables = [
      homeTeam.home_team_name,
      homeTeam.home_team_color,
      awayTeam.away_team_name,
      awayTeam.away_team_color,
      id,
    ];
    const updatedTeams = await db.any(query, variables);
    return updatedTeams;
  } catch (error) {
    throw new Error(`Could not edit teams for that match: ${error}`);
  }
};

module.exports = {
  getAllMatches,
  getSpecificMatch,
  getTeamsFromSpecificMatch,
  updateTeamDetails,
  createMatch,
  deleteMatch,
  updateMatch,
  updateTeam,
};
