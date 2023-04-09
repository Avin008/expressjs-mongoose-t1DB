import express from "express";
import { createPostController } from "../controllers/createPost.controller";
import { deletePostController } from "../controllers/deletePost.controller";
import { updatePostController } from "../controllers/updatePost.controller";

const router = express.Router();

router.post("/", createPostController);
router.delete("/", deletePostController);
router.put("/", updatePostController);

export { router };
