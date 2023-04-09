import mongoose from "mongoose";
import { userModel } from "../models/user";
import * as dotenv from "dotenv";

dotenv.config();

const signupController = async (req: any, res: any) => {
  const { fullname, email, password } = await req.body;

  res.status(200).json({ message: "signup route" });
};

export { signupController };
