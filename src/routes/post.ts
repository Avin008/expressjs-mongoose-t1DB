import express from "express";
import { createPostController } from "../controllers/createPost.controller";
import { deletePostController } from "../controllers/deletePost.controller";
import { updatePostController } from "../controllers/updatePost.controller";
import { getPostController } from "../controllers/getPosts.controller";

const router = express.Router();

router.get("/", getPostController);
router.post("/", createPostController);
router.delete("/", deletePostController);
router.put("/", updatePostController);

export { router };
