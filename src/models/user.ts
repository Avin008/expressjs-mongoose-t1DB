import { Mongoose, Types, Schema, model } from "mongoose";

const userSchema = new Schema({
  _id: Types.ObjectId,
  email: String,
  fullname: String,
  username: String,
  password: String,
  followers: [{ type: Types.ObjectId }],
  following: [{ type: Types.ObjectId }],
});

const userModel = model("User", userSchema);

export { userModel };
