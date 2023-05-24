const db = require("../../models");
const { createNewUser } = require("../../services/user-services");

const getCreateUserPage = (req, res) => {
  res.render("create-user.ejs");
};

const postCreateUser = async (req, res) => {
  try {
    const payload = req.body;

    await createNewUser(payload);

    return res.send("post create user");
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCreateUserPage,
  postCreateUser,
};
