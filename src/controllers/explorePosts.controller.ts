import { Request, Response } from "express";
import { postModel } from "../models/post";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
import { userModel } from "../models/user";

const explorePostsController = async (
  req: Request,
  res: Response
) => {
  const { token } = await req.body;

  // @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const user = await userModel.findById(userId);

    const getPosts = await postModel
      .find()
      .populate("author");

    return res.status(200).json({
      message: "explored posts",
      data: { posts: getPosts },
    });
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { explorePostsController };
