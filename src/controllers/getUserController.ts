import { Request, Response } from "express";
import { userModel } from "../models/user";
import { postModel } from "../models/post";

const getUserController = async (
  req: Request,
  res: Response
) => {
  const { _id } = await req.body;

  try {
    const userData = await userModel.findById(_id);
    const postData = await postModel
      .find({ author: _id })
      .populate("author");

    return res.status(200).json({
      message: "user data",
      data: {
        userData: userData,
        postData: postData,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { getUserController };
