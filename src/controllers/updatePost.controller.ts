import { postModel } from "../models/post";
import { Request, Response } from "express";

const updatePostController = async (
  req: Request,
  res: Response
) => {
  const { token, post } = await req.body;
  const { _id, text } = post;

  try {
    const updatedPost = await postModel.findOneAndUpdate(
      {
        _id: _id,
      },
      { $set: { text: text } }
    );

    return res.status(201).json({
      message: "updated post",
      data: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { updatePostController };
