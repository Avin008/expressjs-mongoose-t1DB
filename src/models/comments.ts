import { Types, Schema, model } from "mongoose";

const commentSchema = new Schema({
  post_id: String,
  author: { type: Types.ObjectId, ref: "User" },
  comment: String,
});

const commentModel = model("Comment", commentSchema);

export { commentModel };
