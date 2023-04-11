import { Request, Response } from "express";
import { userModel } from "../models/user";
import { JWT_SECRET } from "./signup.controller";
import jwt from "jsonwebtoken";

const followUserController = async (
  req: Request,
  res: Response
) => {
  const { token, followedUser } = await req.body;
  const { _id } = followedUser;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const followUser = await userModel.findByIdAndUpdate(
      {
        _id,
      },
      { $push: { followers: userId } }
    );

    const followedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        $push: { following: followUser._id },
      }
    );

    return res.status(201).json({
      message: `you are now following ${followUser.fullname}`,
      data: { followedUser: followUser },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "something went wrogn",
      error: error,
    });
  }
};

export { followUserController };
