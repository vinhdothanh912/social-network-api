const express = require("express");
const { handleLogin } = require("../../controllers/api/auth-controller");

const authRouter = express.Router();

authRouter.post("/login", handleLogin); // method get -> READ data
// router.post("/create-user", createNewUser); // method post -> CREATE data
// router.put("/update-user/:userId", updateUser); // method put -> UPDATE data
// router.delete("/delete-user/:userId", postDeleteUser); // method delete -> DELETE data

module.exports = authRouter;
