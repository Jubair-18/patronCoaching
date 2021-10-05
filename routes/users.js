import express from "express";

const router = express.Router();

import { signin, signup, userInfo, admin } from "../controllers/users.js";

router.post("/signin", signin);
router.get("/admin", admin)
router.post("/signup", signup);
router.get("/data", userInfo);

export default router;