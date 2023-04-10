import express from "express";
import { suggestionsController } from "../controllers/suggestions.controller";

const router = express.Router();

router.post("/", suggestionsController);

export { router };
