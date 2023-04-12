import { commentModel } from "../models/comments";
import { Response, Request } from "express";

const commentController = async (
  req: Request,
  res: Response
) => {
  const { token, post } = await req.body;
  const { _id } = post;

  console.log(post);

  try {
    const comments = await commentModel
      .find({
        post_id: _id,
      })
      .populate("author");

    console.log(comments.populate("author"));

    return res.status(200).json({
      message: "post comments",
      data: { comments: comments },
    });
  } catch (error) {
    res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { commentController };
