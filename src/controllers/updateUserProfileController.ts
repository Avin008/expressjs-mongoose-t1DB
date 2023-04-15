import { Request, Response } from "express";
import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
const updateUserProfileController = async (
  req: Request,
  res: Response
) => {
  const { fullname, username, email, password, token } =
    await req.body;

  // @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  const updateUser = await userModel.findByIdAndUpdate(
    userId,
    {
      $set: {
        fullname: fullname,
        username: username,
        email: email,
        password: password,
      },
    }
  );

  res.status(200).json({ message: "update post" });
};

export { updateUserProfileController };
