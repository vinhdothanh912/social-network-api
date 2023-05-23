const express = require("express");
const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/APIController");

const router = express.Router();

router.get("/users", getAllUsers); // method get -> READ data
router.post("/create-user", createNewUser); // method post -> CREATE data
router.put("/update-user/:userId", updateUser); // method put -> UPDATE data
router.delete("/delete-user/:userId", deleteUser); // method delete -> DELETE data

module.exports = router;
