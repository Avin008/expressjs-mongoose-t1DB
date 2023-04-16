import express from "express";
import { getUserController } from "../controllers/getUserController";
import { updateProfileController } from "../controllers/updateProfileController";
import { signupController } from "../controllers/signup.controller";
import { loginController } from "../controllers/login.controller";
const router = express.Router();

router.post("/", getUserController);
router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/update", updateProfileController);

export { router };
