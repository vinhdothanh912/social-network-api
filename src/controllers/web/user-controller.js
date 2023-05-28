const {
  createNewUser,
  getUserDataById,
  updateUser,
  deleteUserById,
} = require("../../services/user-services");

const getCreateUserPage = (req, res) => {
  res.render("create-user.ejs");
};

const postCreateUser = async (req, res) => {
  try {
    const payload = req.body;

    const message = await createNewUser(payload);

    return res.send(message);
  } catch (error) {
    return res.send(error);
  }
};

const getEditUserPage = async (req, res) => {
  const userId = req.params.userId;

  if (userId) {
    const userData = await getUserDataById(userId);

    if (userData) {
      return res.render("edit-user.ejs", { user: userData });
    } else {
      return res.send("User not found!");
    }
  } else {
    return res.send("User not found!");
  }
};

const postEditUser = async (req, res) => {
  const userData = req.body;
  const userId = req.params.userId;

  try {
    if (userData) {
      await updateUser({ ...userData, userId });

      return res.redirect("/");
    } else {
      return res.send("User not found!");
    }
  } catch (error) {
    return res.send(error);
  }
};

const getDeleteUserPage = async (req, res) => {
  const userId = req.params.userId;

  if (userId) {
    const userData = await getUserDataById(userId);

    if (userData) {
      return res.render("delete-user.ejs", { user: userData });
    } else {
      return res.send("User not found!");
    }
  } else {
    return res.send("User not found!");
  }
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    if (userId) {
      await deleteUserById(userId);

      return res.redirect("/");
    } else {
      return res.send("User not found!");
    }
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  getCreateUserPage,
  postCreateUser,
  getEditUserPage,
  postEditUser,
  getDeleteUserPage,
  postDeleteUser,
};
