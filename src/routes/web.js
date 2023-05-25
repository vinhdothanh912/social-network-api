const express = require("express");
const {
  getCreateUserPage,
  postCreateUser,
  getEditUserPage,
  putEditUser,
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
router.post("/put-edit-user/:userId", putEditUser);

module.exports = router;
