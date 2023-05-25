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
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await hashUserPassword(payload.password);
      await db.User.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: hashPassword,
        address: payload.address,
        phoneNumber: payload.phoneNumber,
        gender: payload.gender,
        // image: payload.image,
        roleId: payload.roleId,
        positionId: payload.positionId,
      });

      resolve("Create new user succeed!");
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { createNewUser };
