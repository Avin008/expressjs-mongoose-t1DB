import { postModel } from "../models/post";
import { Response, Request } from "express";

const deletePostController = async (
  req: Request,
  res: Response
) => {
  const { token, post } = await req.body;
  const { id } = post;

  try {
    const deletedPost = await postModel.findOneAndDelete({
      post_id: id,
    });

    return res
      .status(201)
      .json({
        message: "post deleted",
        data: { deletedPost: deletedPost },
      });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { deletePostController };
