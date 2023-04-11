import express from "express";
import { getPostController } from "../controllers/getPosts.controller";

const router = express.Router();

router.post("/", getPostController);

export { router };
