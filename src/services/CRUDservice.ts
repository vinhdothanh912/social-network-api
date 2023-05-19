import { connection } from "../configs/database.js";

export const getAllUsersService = async () => {
  try {
    const results = await connection.query("SELECT * from Users");

    return results[0];
  } catch (error) {
    return error;
  }
};

export const createNewUserService = async (payload: {
  email: string;
  name: string;
  city: string;
}) => {
  try {
    const { email, name, city } = payload;

    const results = await connection.query(
      `
    INSERT INTO Users (email, name , city) 
    VALUES(?, ?, ?)
    `,
      [email, name, city]
    );

    console.log("@@results: ", results[0]);
    return results;
  } catch (error) {
    return error;
  }
};

export const getUserByIdService = async (userId: string) => {
  const results = await connection.query(
    `
    SELECT * from Users 
    WHERE id = ?
    `,
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

export const updateUserService = async (payload: {
  email: string;
  name: string;
  city: string;
  userId: string;
}) => {
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

export const deleteUserByIdService = async (userId: string) => {
  await connection.query(
    `
    DELETE from Users 
    WHERE id = ?
    `,
    [userId]
  );
};
