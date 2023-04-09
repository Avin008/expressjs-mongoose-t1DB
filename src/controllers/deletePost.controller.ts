import { postModel } from "../models/post";

const deletePostController = async (req: any, res: any) => {
  const { token, post } = await req.body;
  const { id } = post;

  try {
    const deltedPost = await postModel.findOneAndDelete({
      post_id: id,
    });

    return res
      .status(201)
      .json({ message: "post deleted", data: deltedPost });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { deletePostController };
