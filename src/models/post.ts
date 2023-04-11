import { Schema, Types, model } from "mongoose";

const postSchema = new Schema({
  author: Types.ObjectId,
  text: String,
  likes: [{ type: Types.ObjectId, ref: "User" }],
  comments: [
    {
      user: { type: Types.ObjectId, ref: "User" },
      comment: { type: String },
      createdAt: { type: Date, immutable: true },
    },
  ],
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
  updatedAt: { type: Date, required: false },
});

const postModel = model("Post", postSchema);

export { postModel };
