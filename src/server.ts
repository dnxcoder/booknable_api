import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";

//Importing connection with database
import "./database";

const app = express();

app.use(express.json());
//app.use(router);

app.listen(3333, () => {
  console.log("listening api booknable on PORT: 3333");
});
