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
    const findUser = await userModel.findById(userId);
    const createdPost = await postModel.create({
      user_id: findUser._id,
      username: findUser.username,
      fullname: findUser.fullname,
      text: text,
      createdAt: Date.now(),
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
