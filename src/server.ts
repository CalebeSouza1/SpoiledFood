import "reflect-metadata";
import express, { request, response } from "express";

import "./database";

const app = express();

app.listen(3000, () => console.log("Server Spoiled Food is running! "));
