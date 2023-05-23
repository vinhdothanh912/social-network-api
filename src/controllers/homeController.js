const {
  getAllUsersService,
  createNewUserService,
  getUserById,
  updateUserService,
  deleteUserServiceById,
} = require("../services/CRUDservices");

const getHomePage = async (req, res) => {
  const results = await getAllUsersService();

  return res.render("home.ejs", { listUsers: results });
};

const getNewPage = (req, res) => {
  res.send("New Page");
};

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};

const getCreateUserPage = (req, res) => {
  res.render("create-user.ejs");
};

const postCreateUser = async (req, res) => {
  const payload = req.body;

  await createNewUserService(payload);

  return res.redirect("/");
};

const getupdateUserServicePage = async (req, res) => {
  const user = await getUserById(req.params.userId);

  return res.render("update-user.ejs", { user });
};

const postupdateUserService = async (req, res) => {
  const payload = req.body;

  await updateUserService(payload);

  return res.redirect("/");
};

const getdeleteUserServicePage = async (req, res) => {
  const user = await getUserById(req.params.userId);

  return res.render("delete-user.ejs", { user });
};

const postdeleteUserService = async (req, res) => {
  const userId = req.body.userId;

  await deleteUserServiceById(userId);

  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getNewPage,
  getSamplePage,
  getCreateUserPage,
  postCreateUser,
  getupdateUserServicePage,
  postupdateUserService,
  getdeleteUserServicePage,
  postdeleteUserService,
};
