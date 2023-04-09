import express from "express";
import { createPostController } from "../controllers/createPost.controller";
import { deletePostController } from "../controllers/deletePost.controller";

const router = express.Router();

router.post("/", createPostController);
router.delete("/", deletePostController);

export { router };
