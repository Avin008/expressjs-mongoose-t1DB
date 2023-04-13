import { postModel } from "../models/post";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";

const unLikePostController = async (
  req: Request,
  res: Response
) => {
  const { post, token } = await req.body;
  const { _id } = post;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const likedPost = await postModel.findByIdAndUpdate(
      _id,
      { $pull: { likes: userId } }
    );

    return res
      .status(201)
      .json({ message: "post liked", data: likedPost });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { unLikePostController };
