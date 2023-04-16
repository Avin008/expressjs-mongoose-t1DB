import express from "express";
import { getUserController } from "../controllers/getUserController";
import { updateProfileController } from "../controllers/updateProfile.controller";
import { signupController } from "../controllers/signup.controller";
import { loginController } from "../controllers/login.controller";
import { searchController } from "../controllers/searchController";
import { followUserController } from "../controllers/followUser.controller";
import { unfollowUserController } from "../controllers/unFollowUser.Controller";
import { suggestionsController } from "../controllers/suggestions.controller";
const router = express.Router();

router.post("/", getUserController);
router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/update", updateProfileController);
router.post("/search", searchController);
router.post("/follow", followUserController);
router.post("/unfollow", unfollowUserController);
router.post("/suggestions", suggestionsController);

export { router };
