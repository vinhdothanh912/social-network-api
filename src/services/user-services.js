const connection = require("../config/database");
const db = require("../models");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      hashPassword = await bcrypt.hash(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

const createNewUser = async (payload) => {
  try {
    console.log("@@payload", payload);
    const hashPassword = await hashUserPassword(payload.password);
    console.log("@@hashPassword: ", hashPassword);
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser };
