import genToken from "../config/token.js";
import User from "../models/userModels.js";
import bcrypt from "bcryptjs"

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existEmail = await User.findOne({ email });

    if (existEmail) {
      return res.status(400).json({
        message: "Email already exists!", 
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters!",
      });
      }
      
      const hashedPassword = await bcrypt.hash(password, 10)
      
    const user = await User.create({ name, hashedPassword, email });

    const token = await genToken(User._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: false
    })

   return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({
     message: `Sign up error ${error}`
   })
  }
};


