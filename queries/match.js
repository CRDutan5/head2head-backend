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

module.exports = { getAllMatches, getSpecificMatch };
