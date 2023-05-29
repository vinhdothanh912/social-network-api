const { handleAuthLogin } = require("../../services/auth-service");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    await handleAuthLogin(email, password);

    return res.status(200).json({ message: "Hello word" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { handleLogin };
