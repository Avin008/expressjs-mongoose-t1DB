import express from "express";
import { createPostController } from "../controllers/createPost.controller";
import { deletePostController } from "../controllers/deletePost.controller";
import { updatePostController } from "../controllers/updatePost.controller";
import { getPostController } from "../controllers/getPosts.controller";
import { commentController } from "../controllers/commentController";

const router = express.Router();

router.get("/", getPostController);
router.post("/", createPostController);
router.delete("/", deletePostController);
router.put("/", updatePostController);
router.post("/comments", commentController);

export { router };
