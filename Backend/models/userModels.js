import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        assistantName: {
            
        } 
  },
  { timestamps: true }
);

const user = model("User", userSchema);

export default user;
