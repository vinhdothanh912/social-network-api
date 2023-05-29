const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const db = require("../models");
const {
  handleGetUserByEmail,
  handleHashPassword,
} = require("./common-service");

const handleCheckExistEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const results = await handleGetUserByEmail(email);
      if (results?.length > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleCheckEmailPassword = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await handleHashPassword(password);
      const results = await db.User.findOne({
        where: { email, password: hashPassword },
        raw: true,
      });

      if (results?.length > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleAuthLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await handleGetUserByEmail(email);

      if (!user) {
        throw new Error("User does not exist! Please try another user");
      }

      const check = await bcrypt.compareSync(password, user.password);
      if (!check) {
        throw new Error("Wrong password. Please try again");
      }

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleCheckExistEmail,
  handleCheckEmailPassword,
  handleAuthLogin,
};
