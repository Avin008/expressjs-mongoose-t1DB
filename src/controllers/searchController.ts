import { Request, Response } from "express";
import { userModel } from "../models/user";

const searchController = async (
  req: Request,
  res: Response
) => {
  const { searchKey } = await req.body;

  const pattern = new RegExp(searchKey, "i");

  try {
    const searchResult = await userModel
      .find()
      .or([
        { fullname: { $regex: pattern } },
        { username: { $regex: pattern } },
      ]);

    return res.status(200).json({
      message: "search result",
      data: { searchResult: searchResult },
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { searchController };
