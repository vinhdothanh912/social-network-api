import { Request, Response } from "express";
import {
  createNewUserService,
  deleteUserByIdService,
  getAllUsersService,
  updateUserService,
} from "../services/CRUDservice.js";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const results = await getAllUsersService();

    return res.status(200).json({ data: results });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const createNewUser = async (req: Request, res: Response) => {
  const { name, email, city } = req.body;

  try {
    if (!name || !email || !city) {
      throw new Error("missing field");
    }

    const newUser = await createNewUserService({ name, email, city });

    return res.status(200).json({ data: newUser });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { name, email, city } = req.body;
  const { userId } = req.params;

  try {
    if (!name || !email || !city || !userId) {
      throw new Error("missing required field");
    }

    await updateUserService({ name, email, city, userId });

    return res.status(200).json({ id: userId });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    if (!userId) {
      throw new Error("missing userId in url");
    }

    await deleteUserByIdService(userId);

    return res.status(200).json({ id: userId });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
