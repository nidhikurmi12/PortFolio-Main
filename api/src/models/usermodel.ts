import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  image?: string; 
}

const userSchema: Schema<IUser> = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '' 
    }
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
