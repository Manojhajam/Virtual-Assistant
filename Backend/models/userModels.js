import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
<<<<<<< HEAD
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    assistantName: {
      type: String,
    },
    assistantImage: {
      type: String,
    },
    history: {
      type: String,
    },
=======
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
>>>>>>> 203fdacc1c7baf89bf8b125916230877653062f5
  },
  { timestamps: true }
);

<<<<<<< HEAD
const User = model("User", userSchema);

export default User;
=======
const user = model("User", userSchema);

export default user;
>>>>>>> 203fdacc1c7baf89bf8b125916230877653062f5
