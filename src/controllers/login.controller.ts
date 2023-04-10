import { userModel } from "../models/user";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./signup.controller";
import { Request, Response } from "express";

const loginController = async (
  req: Request,
  res: Response
) => {
  const { email, password } = await req.body;

  try {
    const findUser = await userModel.findOne({
      email: email,
    });

    if (findUser === null)
      return res
        .status(400)
        .json({ message: "invalid email" });

    if (findUser.password === password)
      return res.status(200).json({
        message: `welcome back ${findUser.fullname}`,
        data: {
          token: jwt.sign(
            { _id: findUser._id },
            JWT_SECRET
          ),
          _id: findUser._id,
        },
      });

    return res
      .status(400)
      .json({ message: "invalid password" });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { loginController };
