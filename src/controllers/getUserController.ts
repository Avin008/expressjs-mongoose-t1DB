import { Request, Response } from "express";
import { userModel } from "../models/user";
import { postModel } from "../models/post";

const getUserController = async (
  req: Request,
  res: Response
) => {
  const { _id } = await req.body;

  const userData = await userModel.findById(_id);
  const postData = await postModel
    .find({ author: _id })
    .populate("author");

  res.status(200).json({
    message: "user data",
    data: {
      userData: userData,
      postData: postData,
    },
  });
};

export { getUserController };
