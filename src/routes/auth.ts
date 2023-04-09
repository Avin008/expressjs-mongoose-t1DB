import express from "express";
import { loginController } from "../controllers/login.controller";
import { signupController } from "../controllers/signup.controller";

const router = express.Router();

router.post("/login", loginController);

router.post("/signup", signupController);

export { router };
