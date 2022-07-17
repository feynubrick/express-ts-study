import { Router } from "express";

import auth from "./auth";

const router: Router = Router();
router.use("/auth", auth);

export default router;
export { default as auth } from "./auth";
