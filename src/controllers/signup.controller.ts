import mongoose from "mongoose";
import { userModel } from "../models/user";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || "";

const signupController = async (req: any, res: any) => {
  const { fullname, email, password } = await req.body;

  const doesEmailExist = await userModel.exists({
    email: email,
  });

  if (doesEmailExist)
    return res
      .status(400)
      .json({ message: "email already exists" });

  try {
    const createdUser = await userModel.create({
      fullname,
      username: [
        ...fullname,
        Math.floor(Math.random() * 1000),
      ]
        .filter((char) => char !== " ")
        .join("")
        .toLowerCase(),
      email,
      password,
    });

    return res.status(201).json({
      message: `welcome ${fullname}`,
      data: {
        token: jwt.sign(
          { _id: createdUser._id },
          JWT_SECRET
        ),
        _id: createdUser._id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { signupController };
