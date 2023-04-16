import { postModel } from "../models/post";
import { JWT_SECRET } from "./signup.controller";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const likePostController = async (
  req: Request,
  res: Response
) => {
  const { post, token } = await req.body;
  const { _id } = post;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const likedPost = await postModel.findByIdAndUpdate(
      { _id },
      { $push: { likes: userId } }
    );

    return res.status(201).json({
      message: "post liked",
      data: { likedPost: likedPost },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { likePostController };
