import express, { Router } from "express";
import controller from "../controllers/_index";

const router: Router = express.Router();

router.post('/sign-up', controller.auth.signIn);
router.post('/sign-in', controller.auth.signUp);

export default router;
