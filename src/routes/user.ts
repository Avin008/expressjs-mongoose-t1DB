import express from "express";
import { getUserDataController } from "../controllers/getUserController";
import { updateUserProfileController } from "../controllers/updateUserProfileController";
import multer from "multer";
const router = express.Router();

const upload = multer({ dest: "uploads" });

router.post("/", getUserDataController);
router.post(
  "/update",
  <any>upload.single("image"),
  updateUserProfileController
);

export { router };
