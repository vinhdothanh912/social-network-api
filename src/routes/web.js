const express = require("express");
const {
  getCreateUserPage,
  postCreateUser,
  getEditUserPage,
  postEditUser,
  getDeleteUserPage,
  postDeleteUser,
} = require("../controllers/web/user-controller");
const { getHomePage } = require("../controllers/web/home-controller");

const router = express.Router();

// Home routers
router.get("/", getHomePage);

// User routers
// Create user
router.get("/create-user", getCreateUserPage);
router.post("/post-create-user", postCreateUser);

// Edit user
router.get("/edit-user/:userId", getEditUserPage);
router.post("/edit-user/:userId", postEditUser);

// Delete user
router.get("/delete-user/:userId", getDeleteUserPage);
router.post("/delete-user/:userId", postDeleteUser);

module.exports = router;
