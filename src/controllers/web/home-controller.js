const { getAllUser } = require("../../services/home-service");

const getHomePage = async (req, res) => {
  try {
    const results = await getAllUser();

    // console.log("@@results: ", results);

    return res.render("home.ejs", { listUsers: results });
  } catch (error) {
    return error;
  }
};

module.exports = { getHomePage };
