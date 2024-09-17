import express from "express";
import {
  getAllAlumni,
  registerAlumni,
  loginAlumni,
  refreshToken,
} from "../controllers/Alumni.js";

import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();


// Alumni Registration Route
router.post("/register",upload.single('profilePicture'), registerAlumni);

// Alumni Login Route
router.post("/login", loginAlumni);

router.get('/',getAllAlumni)

// Refresh Token Route
router.post("/refresh-token", refreshToken);

export default router;
