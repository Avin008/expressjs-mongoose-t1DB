import { Request, Response } from "express";
import { postModel } from "../models/post";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
import { commentModel } from "../models/comments";
const getPostController = async (
  req: Request,
  res: Response
) => {
  try {
    const getPosts = await postModel
      .find()
      .populate("author");

    return res.status(200).json({
      message: "followed users posts",
      data: { posts: getPosts },
    });
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { getPostController };
