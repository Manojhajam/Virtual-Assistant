import genToken from "../config/token.js";
import User from "../models/userModels.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Email does't exists!",
      });
    }

    const isMathed = await bcrypt.compare(password, user.password);
    if (!isMathed) {
      return res.status(400).json({
        message: "Password incorrect!",
      });
    }

    const token = await genToken(User._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: false,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: `Login error ${error}`,
    });
  }
};

export const Logout = async (req, res) =>{
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "Log out Successfully!"
    });
  } catch (error) {
   return res.status(500).json({
      message: `Log out error ${error}`,
    }); 
  }
}
