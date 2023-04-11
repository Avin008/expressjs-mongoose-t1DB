import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
import { postModel } from "../models/post";
import { Response, Request } from "express";

const createPostController = async (
  req: Request,
  res: Response
) => {
  const { post, token } = await req.body;
  const { text } = post;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const createdPost = await postModel.create({
      author: userId,
      text: text,
    });

    return res.status(201).json({
      message: "post created successfully",
      data: { post: createdPost },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { createPostController };
