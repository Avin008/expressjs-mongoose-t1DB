import { Request, Response } from "express";
import { postModel } from "../models/post";
import { userModel } from "../models/user";

const explorePostsController = async (
  req: Request,
  res: Response
) => {
  // @ts-ignore

  try {
    const user = await userModel.find();

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
