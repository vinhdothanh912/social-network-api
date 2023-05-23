const {
  getAllUsersService,
  createNewUserService,
  deleteUserServiceById,
  updateUserService,
} = require("../services/CRUDservices");

const getAllUsers = async (req, res) => {
  try {
    const results = await getAllUsersService();

    return res.status(200).json({ data: results });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const createNewUser = async (req, res) => {
  const { name, email, city } = req.body;

  try {
    if (!name || !email || !city) {
      throw new Error("missing field");
    }

    const newUser = await createNewUserService({ name, email, city });

    return res.status(200).json({ data: newUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { name, email, city } = req.body;
  const { userId } = req.params;

  try {
    if (!name || !email || !city || !userId) {
      throw new Error("missing required field");
    }

    await updateUserService({ name, email, city, userId });

    return res.status(200).json({ id: userId });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    if (!userId) {
      throw new Error("missing userId in url");
    }

    await deleteUserServiceById(userId);

    return res.status(200).json({ id: userId });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
