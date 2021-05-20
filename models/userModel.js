import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    role: { type: Number, default: 1 },
    email: {
      type: String,
      unique: true,
      required: true,
      /*validate: {
        validator: () => Promise.resolve(false),
        message: 'Email duplicated'
      }*/
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

export default User;
