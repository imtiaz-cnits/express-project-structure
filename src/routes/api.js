import express from "express";
import * as WelcomeController from "../controllers/WelcomeController.js";

const router = express.Router();

router.get("/", WelcomeController.welcome);
router.get("/welcome1", WelcomeController.welcome1);
router.get("/welcome2", WelcomeController.welcome2);

export default router;
