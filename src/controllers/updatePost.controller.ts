import { postModel } from "../models/post";

const updatePostController = async (req: any, res: any) => {
  const { token, post } = await req.body;
  const { id, text } = post;

  try {
    const updatedPost = await postModel.findOneAndUpdate(
      {
        post_id: id,
      },
      { $set: { text: text } }
    );

    return res.status(201).json({
      message: "updated post",
      data: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};

export { updatePostController };
