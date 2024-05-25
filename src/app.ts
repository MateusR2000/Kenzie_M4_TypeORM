import express, { Application, json } from "express";
import "express-async-errors";
import "dotenv/config";
import  devRouter  from "./routers/developers.router";
import projectRouter from "./routers/project.router";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/developers", devRouter);

app.use("/projects", projectRouter);

app.use(middlewares.handleErrors);

export default app;

