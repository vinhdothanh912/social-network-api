import express, { Express, Request, Response } from "express";
import path from "path";

const configViewEngine = (app: Express) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  // config static files: images/css/js
  app.use(express.static(path.join("./src", "public")));
};

export { configViewEngine };
