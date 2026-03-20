import express from "express";
import { isAuthenticated, login, logout, register, resetPassword, resetPasswordOtp, sendEmailVerificationOtp, verifyEmail } from "../controllers/authController.js";
import { verifyJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-email-verification-otp", verifyJWT, sendEmailVerificationOtp);
router.post("/verify-email", verifyJWT, verifyEmail);
router.post("/is-auth", verifyJWT, isAuthenticated);
router.post("/reset-password-otp", verifyJWT, resetPasswordOtp);
router.post("/reset-password", verifyJWT, resetPassword);

export default router;