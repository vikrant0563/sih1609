import express from "express";
const router = express.Router();
import {createJob,getAllJobs}  from "../controllers/job.js";

// Post job route
router.post('/post-job', createJob);

router.get('/',getAllJobs)

export default router;
