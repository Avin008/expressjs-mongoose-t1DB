import express from "express";
import { getUserDataController } from "../controllers/getUserController";

const router = express.Router();

router.post("/", getUserDataController);

export { router };
