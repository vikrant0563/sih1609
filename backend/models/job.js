import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  jobDescription: { type: String, required: true },
  applicationLink: { type: String, required: true },
  logo: { type: String }
});

export const Job = mongoose.model('Job', jobSchema);
