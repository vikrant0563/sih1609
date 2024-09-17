import  {Alumni} from "../models/Alumni.js";
import jwt from "jsonwebtoken";

// Register Alumni
export const registerAlumni = async (req, res) => {
  try {
    const { fullname, email, password, graduationYear, fieldOfStudy, degree, currentJobTitle, currentLocation } = req.body;
    const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;
    // Check if the email already exists
    const existingAlumni = await Alumni.findOne({ email });
    if (existingAlumni) {
      return res.status(400).json({ error: "Email is already registered." });
    }

    // Create new alumni instance
    const alumni = new Alumni({
      fullname,
      email,
      password,
      graduationYear,
      fieldOfStudy,
      degree,
      currentJobTitle,
      currentLocation,
      profilePicture,
    });

    // Save the alumni in the database
    await alumni.save();

    // Generate an access token
    const accessToken = alumni.generateAccessToken();
    const refreshToken = alumni.generateRefreshToken();

    res.status(201).json({
      message: "Alumni registered successfully",
      alumni: {
        id: alumni._id,
        fullname: alumni.fullname,
        email: alumni.email,
        graduationYear: alumni.graduationYear,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Server error during registration." });
  }
};
// Get all registered alumni
export const getAllAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alumni', error });
  }
};

// Login Alumni
export const loginAlumni = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if alumni exists
    const alumni = await Alumni.findOne({ email });
    if (!alumni) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Check if the password is correct
    const isPasswordCorrect = await alumni.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    // Generate tokens
    const accessToken = alumni.generateAccessToken();
    const refreshToken = alumni.generateRefreshToken();

    res.status(200).json({
      message: "Login successful",
      alumni: {
        id: alumni._id,
        fullname: alumni.fullname,
        email: alumni.email,
        graduationYear: alumni.graduationYear,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error during login." });
  }
};

// Refresh Access Token
export const refreshToken = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(403).json({ error: "Access denied, no token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const newAccessToken = jwt.sign(
      { _id: decoded._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(403).json({ error: "Invalid token." });
  }
};
