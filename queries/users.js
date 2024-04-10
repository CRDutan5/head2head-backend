const db = require("../db/dbConfig");
/**
 * Finds a user by their username.
 * @param {string} username - The username of the user to find.
 * @returns {Promise<object|null>} The user object if found, otherwise null.
 */
const findUserByUsername = async (username) => {
  try {
    const query = "SELECT * FROM users WHERE username = $1";

    const user = await db.oneOrNone(query, username);

    return user;
  } catch (error) {
    console.error("Error finding user by username:", error);
    throw error;
  }
};

const createUser = async ({ username, passwordHash, email, firstName }) => {
  const query = `
      INSERT INTO users (username, password_hash, email, firstName)
      VALUES ($1, $2, $3, $4)
      RETURNING id, username, email, firstName; 
    `;
  const newUser = await db.one(query, [
    username,
    passwordHash,
    email,
    firstName,
  ]);
  return newUser;
};

module.exports = {
  findUserByUsername,
  createUser,
};
