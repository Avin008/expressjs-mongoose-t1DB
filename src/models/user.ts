import {
  Schema,
  Types,
  model,
  SchemaTypes,
} from "mongoose";

const userSchema = new Schema({
  email: String,
  fullname: String,
  username: String,
  password: String,
  followers: [{ type: Types.ObjectId, ref: "User" }],
  following: [{ type: Types.ObjectId, ref: "User" }],
});

const userModel = model("User", userSchema);

export { userModel };
