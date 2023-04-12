import { Schema, Types, model } from "mongoose";

const postSchema = new Schema({
  author: { type: Types.ObjectId, ref: "User" },
  text: String,
  likes: [{ type: Types.ObjectId, ref: "User" }],
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
  updatedAt: { type: Date, required: false },
});

const postModel = model("Post", postSchema);

export { postModel };
