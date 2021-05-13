import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    role: { type: Number, default: 1 },
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

export default User;
