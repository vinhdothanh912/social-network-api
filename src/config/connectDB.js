const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB.USER,
  null,
  {
    host: "localhost",
    dialect: mysql,
  }
);
