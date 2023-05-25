const db = require("../models");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const { v4: uuidv4 } = require("uuid");

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
        id: uuidv4(),
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: hashPassword,
        address: payload.address,
        phoneNumber: payload.phoneNumber,
        gender: payload.gender,
        roleId: payload.roleId,
        positionId: payload.positionId,
        // image: payload.image,
      });

      resolve("Create new user succeed!");
    } catch (error) {
      reject(error);
    }
  });
};

const getUserDataById = async (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });

      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = async (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(
        {
          firstName: payload.firstName,
          lastName: payload.lastName,
          address: payload.address,
        },
        {
          where: { id: payload.userId },
          raw: true,
        }
      );

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { createNewUser, getUserDataById, updateUser };
