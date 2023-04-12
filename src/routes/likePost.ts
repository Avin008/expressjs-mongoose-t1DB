import express from "express";
import { likePostController } from "../controllers/likePost.controller";
import { unLikePostController } from "../controllers/unLikePost.controller";

const router = express.Router();

router.post("/", likePostController);
router.put("/", unLikePostController);

export { router };
