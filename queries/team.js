const db = require("../db/dbConfig");

const getTeamById = async (id) => {
  try {
    const team = await db.one("SELECT * FROM team WHERE id=$1", id);
    return team;
  } catch (error) {
    return `${error}: Cannot get team`;
  }
};
module.exports = { getTeamById };
