require("dotenv").config();
const express = require("express");

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// set up routers
app.use("/", webRoutes);

app.use("/api/v1/", apiRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
