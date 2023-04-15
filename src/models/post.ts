import { Schema, Types, model } from "mongoose";

const postSchema = new Schema({
  author: { type: Types.ObjectId, ref: "User" },
  text: String,
  likes: [{ type: Types.ObjectId, ref: "User" }],
  createdAt: { type: Number, default: () => Date.now() },
  updatedAt: { type: Number, default: () => Date.now() },
});

const postModel = model("Post", postSchema);

export { postModel };
