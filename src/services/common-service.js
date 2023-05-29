const db = require("../models");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const handleGetUserByEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { email }, raw: true });

      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const handleHashPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      hashPassword = await bcrypt.hash(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { handleGetUserByEmail, handleHashPassword };
