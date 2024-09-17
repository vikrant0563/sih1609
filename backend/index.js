import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import path from 'path'
import { fileURLToPath } from 'url';
import Alumni from "./routes/Alumni.js";
import donationRoutes from "./routes/donationRoutes.js";
import job from './routes/job.js'
import bodyParser from 'body-parser'
 dotenv.config({
    path: './config/.env'
})

// Configure dotenv
dotenv.config();

// Initialize the app
const app = express();

// Middleware for JSON data
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(bodyParser.json());
app.use(cors())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error: ", error));

// Routes Middleware
app.get("/", (req, res) => {
    res.send("Welcome to the Alumni Platform"); // Serve a proper response or a webpage
  });


app.use("/alumni", Alumni);
app.use("/donation", donationRoutes);
app.use("/jobs",job)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
