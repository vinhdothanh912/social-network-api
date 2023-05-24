const express = require("express");
const {
  getCreateUserPage,
  postCreateUser,
} = require("../controllers/web/user-controller");
const { getHomePage } = require("../controllers/web/home-controller");

const router = express.Router();

// Home routers
router.get("/", getHomePage);

// User routers
router.get("/create-user", getCreateUserPage);
router.post("/create-user", postCreateUser);

module.exports = router;
