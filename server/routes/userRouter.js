import express from "express";
import { getUserData } from "../controllers/userController.js";
import { verifyJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/data", verifyJWT, getUserData);

export default router;