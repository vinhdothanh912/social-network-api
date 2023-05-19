import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.get("/users", getAllUsers); // method get -> READ data
authRouter.post("/create-user", createNewUser); // method post -> CREATE data
authRouter.put("/update-user/:userId", updateUser); // method put -> UPDATE data
authRouter.delete("/delete-user/:userId", deleteUser); // method delete -> DELETE data

export default authRouter;
