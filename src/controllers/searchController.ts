import { Request, Response } from "express";
import { userModel } from "../models/user";

const searchController = async (
  req: Request,
  res: Response
) => {
  const { searchKey } = await req.body;

  const pattern = new RegExp(searchKey, "i");

  const searchResult = await userModel
    .find()
    .or([
      { fullname: { $regex: pattern } },
      { username: { $regex: pattern } },
    ]);

  res.status(200).json({
    message: "search result",
    data: { searchResult: searchResult },
  });
};

export { searchController };
