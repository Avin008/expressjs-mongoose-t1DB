import mongoose from "mongoose";
import { userModel } from "../models/user";
import * as dotenv from "dotenv";

dotenv.config();

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
      data: createdUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { signupController };
