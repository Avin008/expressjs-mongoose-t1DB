import express from "express";
import { getUserController } from "../controllers/getUserController";
import { updateProfileController } from "../controllers/updateProfile.controller";
import { signupController } from "../controllers/signup.controller";
import { loginController } from "../controllers/login.controller";
import { searchController } from "../controllers/searchController";
import { followUserController } from "../controllers/followUser.controller";
import { unfollowUserController } from "../controllers/unfollowUser.controller";
import { suggestionsController } from "../controllers/suggestions.controller";
import multer from "multer";
const router = express.Router();

const upload = multer();

router.post("/", getUserController);
router.post("/signup", signupController);
router.post("/login", loginController);
router.post(
  "/update",
  <any>upload.none(),
  updateProfileController
);
router.post("/search", searchController);
router.post("/follow", followUserController);
router.post("/unfollow", unfollowUserController);
router.post("/suggestions", suggestionsController);

export { router };
