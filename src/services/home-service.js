const db = require("../models");

const getAllUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.User.findAll({ raw: true });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getAllUser };
