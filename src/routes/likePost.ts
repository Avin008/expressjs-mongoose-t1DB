import express from "express";
import { likePostController } from "../controllers/likePost.controller";

const router = express.Router();

router.post("/", likePostController);

export { router };
