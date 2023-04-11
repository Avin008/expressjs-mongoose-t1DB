import express from "express";
import { followUserController } from "../controllers/followUser.controller";

const router = express.Router();

router.post("/", followUserController);

export { router };
