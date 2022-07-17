import express, { Router } from "express";
import controllers from "../controllers/_index";

const router: Router = express.Router();

router.post("/sign-up", controllers.auth.signUp);
router.post("/sign-in", controllers.auth.signIn);

export default router;
