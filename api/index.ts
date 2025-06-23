import express from "express";
const app = express();
import { prismaClient } from "store/client";

app.post("/website", (req, res) => {});

app.get("/status/:websiteId", (req, res) => {});

app.listen(process.env.PORT || 3001);
