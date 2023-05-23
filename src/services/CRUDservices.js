const connection = require("../config/database");

const getAllUsersService = async () => {
  const [results, fields] = await connection.query("SELECT * from Users");

  return results;
};

const createNewUserService = async (payload) => {
  try {
    const { email, name, city } = payload;

    const [resulst] = await connection.query(
      `
    INSERT INTO Users (email, name , city) 
    VALUES(?, ?, ?)
    `,
      [email, name, city]
    );

    return resulst;
  } catch (error) {
    return error;
  }
};

const getUserById = async (userId) => {
  const [results, fields] = await connection.query(
    `
    SELECT * from Users 
    WHERE id = ?
    `,
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

const updateUserService = async (payload) => {
  try {
    const { userId: id, email, name, city } = payload;

    await connection.query(
      `
      UPDATE Users 
      SET email = ?, name = ?, city = ?
      WHERE id = ?
      `,
      [email, name, city, id]
    );
  } catch (error) {
    return error;
  }
};

const deleteUserServiceById = async (userId) => {
  await connection.query(
    `
    DELETE from Users 
    WHERE id = ?
    `,
    [userId]
  );
};

module.exports = {
  getAllUsersService,
  createNewUserService,
  getUserById,
  updateUserService,
  deleteUserServiceById,
};
