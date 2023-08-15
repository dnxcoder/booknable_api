import "reflect-metadata";
import express from "express";
import { router } from "./routes";

//Importing connection with database
import "./shared/infra/typeorm";

//Importing injections of dependency
import "./shared/container/index";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log("listening api booknable on PORT: 3333");
});
