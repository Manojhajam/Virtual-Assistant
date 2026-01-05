import Router from "express"
import { signUp, Login, Logout } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", signUp)
authRouter.post("/signin", Login)
authRouter.get("/logout", Logout)

export default authRouter;