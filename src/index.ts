import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { configViewEngine } from "./config/viewEngine.js";

import { authRouter } from "./routes/index.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// config view engine
configViewEngine(app);

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// set up routers
app.use("/api/v1/", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
