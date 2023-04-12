import { commentModel } from "../models/comments";
import { Request, Response } from "express";
import { JWT_SECRET } from "./signup.controller";
import jwt from "jsonwebtoken";
const addCommentController = async (
  req: Request,
  res: Response
) => {
  const { token, post, comment } = await req.body;
  const { _id } = post;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const comments = await commentModel.create({
      post_id: _id,
      author: userId,
      comment: comment,
    });

    return res.status(200).json({
      message: "post comments",
      data: { comments: comments },
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "something went wrong" });
  }
};

export { addCommentController };
