import {Job} from "../models/job.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    const { jobTitle, companyName, location, jobType, jobDescription, applicationLink } = req.body;

    const newJob = new Job({
      jobTitle,
      companyName,
      location,
      jobType,
      jobDescription,
      applicationLink
    });

    await newJob.save();
    res.status(201).json({ message: 'Job posted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAllJobs = async (req, res) => {
    try {
      const job = await Job.find();
      res.status(200).json(job);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching alumni', error });
    }
  };
