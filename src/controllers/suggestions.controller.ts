import { Request, Response } from "express";
import { JWT_SECRET } from "./signup.controller";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user";

const suggestionsController = async (
  req: Request,
  res: Response
) => {
  const { token } = await req.body;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const suggestedUsers = await userModel
      .find({
        followers: { $nin: userId },
      })
      .find({ _id: { $ne: userId } });

    return res.status(200).json({
      message: "followed user list",
      data: { suggestedUsers: suggestedUsers },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { suggestionsController };
