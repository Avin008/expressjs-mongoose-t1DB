import { Request, Response } from "express";
import { postModel } from "../models/post";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
import { userModel } from "../models/user";
import { stringify } from "querystring";

const getPostController = async (
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
