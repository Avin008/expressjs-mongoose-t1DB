import express from "express";
import { createPostController } from "../controllers/createPost.controller";

const router = express.Router();

router.post("/", createPostController);

export { router };
