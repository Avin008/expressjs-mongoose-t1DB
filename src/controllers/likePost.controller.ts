import { postModel } from "../models/post";
import { JWT_SECRET } from "./signup.controller";
import jwt from "jsonwebtoken";

const likePostController = async (req: any, res: any) => {
  const { post, token } = await req.body;
  const { id } = post;

  //   @ts-ignore
  const userId = jwt.verify(token, JWT_SECRET)._id;

  try {
    const likedPost = await postModel.findOneAndUpdate(
      { post_id: id },
      { $push: { likes: userId } }
    );
    return res
      .status(201)
      .json({ message: "post liked", data: likedPost });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { likePostController };
