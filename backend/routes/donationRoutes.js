import express from "express";
import { createPaymentIntent,getAllDonatedAlumni } from "../controllers/donationController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create payment intent (only accessible to logged-in users)
router.post("/create-payment-intent", verifyToken, createPaymentIntent);
router.get('/',getAllDonatedAlumni)

export default router;
