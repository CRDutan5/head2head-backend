const db = require("../db/dbConfig");

const getAllMatches = async () => {
  try {
    const matches = await db.any("SELECT * FROM match");
    return matches;
  } catch (error) {
    return "Error retrieving matches" + error;
  }
};

module.exports = { getAllMatches };
