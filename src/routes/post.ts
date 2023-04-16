import express from "express";
import { createPostController } from "../controllers/createPost.controller";
import { deletePostController } from "../controllers/deletePost.controller";
import { updatePostController } from "../controllers/updatePost.controller";
import { getPostController } from "../controllers/getPosts.controller";
import { commentController } from "../controllers/commentController";
import { addCommentController } from "../controllers/addCommentController";
import { likePostController } from "../controllers/likePost.controller";
import { unLikePostController } from "../controllers/unLikePost.controller";

const router = express.Router();

router.post("/", getPostController);
router.post("/create", createPostController);
router.post("/delete", deletePostController);
router.post("/update", updatePostController);
router.post("/like", likePostController);
router.post("/unlike", unLikePostController);
router.post("/comments/", commentController);
router.post("/comments/create", addCommentController);

export { router };
