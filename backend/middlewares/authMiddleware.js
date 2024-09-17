import jwt from "jsonwebtoken";
import {Alumni} from "../models/Alumni.js";

export const verifyToken = async (req, res, next) => {
  let token;
 
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
  
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
      req.alumni = await Alumni.findById(decoded._id).select("-password");
      console.log("alumni authentication",req.alumni)
      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
