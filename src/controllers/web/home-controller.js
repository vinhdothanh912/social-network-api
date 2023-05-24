const getHomePage = async (req, res) => {
  const results = await getAllUsersService();
  // const data = await db.User.findAll();
  return res.render("home.ejs", { listUsers: JSON.stringify(results) });
};

module.exports = { getHomePage };
