const express = require("express");
const {
  getHomePage,
  getNewPage,
  getSamplePage,
  getCreateUserPage,
  postCreateUser,
  getupdateUserServicePage,
  postupdateUserService,
  getdeleteUserServicePage,
  postdeleteUserService,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/new", getNewPage);
router.get("/sample", getSamplePage);

// User routers
router.get("/create-user", getCreateUserPage);
router.post("/create-user", postCreateUser);

router.get("/update-user/:userId", getupdateUserServicePage);
router.post("/update-user", postupdateUserService);

router.get("/delete-user/:userId", getdeleteUserServicePage);
router.post("/delete-user", postdeleteUserService);

module.exports = router;
