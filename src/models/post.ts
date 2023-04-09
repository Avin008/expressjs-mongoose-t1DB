import { Mongoose, Schema, Types, model } from "mongoose";

const postSchema = new Schema({
  user_id: String,
  username: String,
  fullname: String,
  text: String,
  likes: [{ type: Types.ObjectId }],
  comment: [
    {
      user_id: { type: Types.ObjectId },
      fullname: String,
      username: String,
      comment: String,
    },
  ],
});

const postModel = model("Post", postSchema);

export { postModel };
